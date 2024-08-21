from flask import Blueprint, jsonify, request
from models.StoreItem import StoreItem
from database import db
from flask_jwt_extended import jwt_required

store_bp = Blueprint('StoreItem', __name__)

MAX_ITEMS = 2

@store_bp.route('/api/store', methods=['GET'])
def get_store():
    # Getting all items posts
    items = StoreItem.query.all()

    # Validate
    if not items:
        return jsonify({'message': 'No items found.'}), 404
    
    results = [item.to_dict() for item in items]
    return jsonify(results), 200

@store_bp.route('/api/store', methods=['POST'])
@jwt_required()
def add_store_item():
    data = request.get_json()

    # Validate
    if not all(key in data for key in ('title', 'price', 'link', 'image_path')):
        return jsonify({'error': 'Missing required fields'}), 400
    # Checking quantity
    current_count = StoreItem.query.count()
    if current_count >= MAX_ITEMS:
        oldest_item = StoreItem.query.order_by(StoreItem.id.asc()).first()
        if oldest_item:
            try:
                db.session.delete(oldest_item)
                db.session.commit()
            except Exception as e:
                db.session.rollback()
                return jsonify({
                    'message': 'Unhandled error when removing old items.',
                    'error': str(e)
                }), 500

    new_item = StoreItem(
        title=data['title'],
        text=data['price'],
        link=data['link'],
        image_path=data['image_path']
    )

    try: 
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when adding items.',
            'error': str(e)
        }), 500