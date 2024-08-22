from flask import Blueprint, request, jsonify
from models.NewsPost import NewsPost
from database import db
from flask_jwt_extended import jwt_required

news_bp = Blueprint('NewsPost', __name__)

@news_bp.route('/api/news', methods=['GET'])
def get_news():
    # Getting all news posts
    news = NewsPost.query.order_by(NewsPost.id.asc()).all()

    # Validate
    if not news:
        return jsonify({'message': 'No news found.'}), 404
    
    results = [new.to_dict() for new in news]
    return jsonify(results), 200

@news_bp.route('/api/news/<int:id>', methods=['GET'])
def get_news_from_id(id):
    # Getting news from id
    new = NewsPost.query.get_or_404(id)
    return jsonify(new.to_dict()), 200

@news_bp.route('/api/news/<int:id>', methods=['PUT'])
@jwt_required()
def update_news_from_id(id):
    data = request.get_json()

    # Validate
    required_fields = ['title', 'text', 'link', 'image_path']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Getting news from id
    new = NewsPost.query.get_or_404(id)
    
    new.title = data['title']
    new.text = data['text']
    new.link = data['link']
    new.image_path = data['image_path']
    new.alt = data.get('alt', '')

    try:
        db.session.commit()
        return jsonify(new.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when editing news.',
            'error': str(e)
        }), 500