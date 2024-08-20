from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from models.Admin import Admin
from database import db

admins_bp = Blueprint('Admin', __name__)

# Log in route
@admins_bp.route('/api/admin/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required.'}), 400

    admin = Admin.query.filter_by(username=username).first()

    if admin is None or not check_password_hash(admin.password_hash, password):
        return jsonify({'message': 'Invalid username or password.'}), 401

    token = create_access_token(identity={'username': username})

    return jsonify({
        'message': 'Logged in successfully.',
        'access_token': token,
    }), 200

# Route to create super admin
@admins_bp.route('/api/admin/init', methods=['PUT'])
def create_super_admin():
    username = 'FURIA' # todo get from config
    password = 'FURIA' # get from config

    admin = Admin.query.filter_by(username=username).first()
    if admin is None:
        return jsonify({
            'message': 'Account not found. Make sure you created the super admin account correctly.'
        }), 401
    
    admin.password_hash = generate_password_hash(password)
    try:
        db.session.add(admin)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'message': 'Unhandled error when creating admin.', 
            'error': str(e)
        }), 500