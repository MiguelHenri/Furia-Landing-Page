import os
from flask import Blueprint, jsonify, request, send_from_directory
from werkzeug.utils import secure_filename
from uuid import uuid4
from config import Config
from flask_jwt_extended import jwt_required

images_bp = Blueprint('Image', __name__)

class ImageUtils:
    @staticmethod
    def allowed_file(filename):
        ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp'}
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    
@images_bp.route('/api/images/<path:filename>')
def serve_file(filename):
    return send_from_directory(Config.UPLOAD_FOLDER, filename)