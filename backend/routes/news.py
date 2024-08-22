import os
from flask import Blueprint, request, jsonify
from models.NewsPost import NewsPost
from database import db
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from config import Config
from uuid import uuid4
from .images import ImageUtils

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
    # Getting news from id
    new = NewsPost.query.get_or_404(id)

    # Updating fields
    new.title = request.form.get('title', new.title)
    new.text = request.form.get('text', new.text)
    new.link = request.form.get('link', new.link)
    new.alt = request.form.get('alt', new.alt)

    if 'image' in request.files:
        image_file = request.files['image']

        # Deleting old image
        if new.image_path:
            old_image_path = os.path.join(Config.UPLOAD_FOLDER, secure_filename(new.image_path))
            print(old_image_path)
            if os.path.exists(old_image_path):
                os.remove(old_image_path)

        # Saving image
        if image_file and ImageUtils.allowed_file(image_file.filename):
            filename = secure_filename(image_file.filename)
            unique_filename = f"{uuid4()}_{filename}"
            image_path = os.path.join(Config.UPLOAD_FOLDER, unique_filename)
            image_file.save(image_path)

        # Updating path
        new.image_path = unique_filename

    try:
        db.session.commit()
        return jsonify(new.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when editing news.',
            'error': str(e)
        }), 500