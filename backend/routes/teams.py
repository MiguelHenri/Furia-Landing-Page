from flask import Blueprint, request, jsonify
from models.Team import Team
from database import db
from flask_jwt_extended import jwt_required

teams_bp = Blueprint('Team', __name__)

@teams_bp.route('/api/teams', methods=['GET'])
def get_teams():
    # Getting all teams
    teams = Team.query.all()

    # Validate
    if not teams:
        return jsonify({'message': 'No teams found.'}), 404
    
    results = [team.to_dict() for team in teams]
    return jsonify(results), 200