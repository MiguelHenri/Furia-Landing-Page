from flask import Blueprint, request, jsonify
from models.Team import Team
from database import db
from flask_jwt_extended import jwt_required

teams_bp = Blueprint('Team', __name__)

MAX_TEAMS = 3

@teams_bp.route('/api/teams', methods=['GET'])
def get_teams():
    # Getting all teams
    teams = Team.query.all()

    # Validate
    if not teams:
        return jsonify({'message': 'No teams found.'}), 404
    
    results = [team.to_dict() for team in teams]
    return jsonify(results), 200

@teams_bp.route('/api/teams', methods=['POST'])
@jwt_required()
def add_teams():
    data = request.get_json()

    # Validate
    if not all(key in data for key in ('title', 'link', 'image_path')):
        return jsonify({'error': 'Missing required fields'}), 400
    # Checking quantity
    current_count = Team.query.count()
    if current_count >= MAX_TEAMS:
        oldest_team = Team.query.order_by(Team.id.asc()).first()
        if oldest_team:
            try:
                db.session.delete(oldest_team)
                db.session.commit()
            except Exception as e:
                db.session.rollback()
                return jsonify({
                    'message': 'Unhandled error when removing team.',
                    'error': str(e)
                }), 500

    new_team = Team(
        title=data['title'],
        link=data['link'],
        image_path=data['image_path']
    )

    try: 
        db.session.add(new_team)
        db.session.commit()
        return jsonify(new_team.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when adding team.',
            'error': str(e)
        }), 500