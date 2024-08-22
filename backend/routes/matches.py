from flask import Blueprint, jsonify, request
from models.Match import Match
from database import db
from flask_jwt_extended import jwt_required

matches_bp = Blueprint('Match', __name__)

@matches_bp.route('/api/matches', methods=['GET'])
def get_matches():
    # Getting all matches
    # todo filter
    matches = Match.query.order_by(Match.date.asc()).all()

    # Validate
    if not matches:
        return jsonify({'message': 'No matches found.'}), 404
    
    results = [match.to_dict() for match in matches]
    return jsonify(results), 200

@matches_bp.route('/api/matches', methods=['POST'])
@jwt_required()
def add_match():
    data = request.get_json()

    # Validate
    if not all(key in data for key in ('tournament', 'player1', 'player2', 'date', 'icon')):
        return jsonify({'error': 'Missing required fields'}), 400

    new_match = Match(
        tournament=data['tournament'],
        player1=data['player1'],
        player2=data['player2'],
        date=data['date'],
        icon=data['icon']
    )

    try: 
        db.session.add(new_match)
        db.session.commit()
        return jsonify(new_match.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error adding match.',
            'error': str(e)
        }), 500