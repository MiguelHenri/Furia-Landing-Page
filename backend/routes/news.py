from flask import Blueprint, request, jsonify
from models.NewsPost import NewsPost
from database import db
from flask_jwt_extended import jwt_required

news_bp = Blueprint('NewsPost', __name__)

MAX_NEWS = 3

@news_bp.route('/api/news', methods=['GET'])
def get_news():
    # Getting all news posts
    news = NewsPost.query.all()

    # Validate
    if not news:
        return jsonify({'message': 'No news found.'}), 404
    
    results = [new.to_dict() for new in news]
    return jsonify(results), 200

@news_bp.route('/api/news', methods=['POST'])
@jwt_required()
def add_news():
    data = request.get_json()

    # Validate
    if not all(key in data for key in ('title', 'text', 'link', 'image_path')):
        return jsonify({'error': 'Missing required fields'}), 400
    # Checking quantity
    current_count = NewsPost.query.count()
    if current_count >= MAX_NEWS:
        oldest_news = NewsPost.query.order_by(NewsPost.id.asc()).first()
        if oldest_news:
            try:
                db.session.delete(oldest_news)
                db.session.commit()
            except Exception as e:
                db.session.rollback()
                return jsonify({
                    'message': 'Unhandled error when removing old news.',
                    'error': str(e)
                }), 500

    new_news = NewsPost(
        title=data['title'],
        text=data['text'],
        link=data['link'],
        image_path=data['image_path']
    )

    try: 
        db.session.add(new_news)
        db.session.commit()
        return jsonify(new_news.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when adding news.',
            'error': str(e)
        }), 500