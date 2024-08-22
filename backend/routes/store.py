from flask import Blueprint, jsonify, request
from models.StoreItem import StoreItem
from database import db
from flask_jwt_extended import jwt_required

store_bp = Blueprint('StoreItem', __name__)

@store_bp.route('/api/store', methods=['GET'])
def get_store():
    # Getting all items posts
    items = StoreItem.query.all()

    # Validate
    if not items:
        return jsonify({'message': 'No items found.'}), 404
    
    results = [item.to_dict() for item in items]
    return jsonify(results), 200