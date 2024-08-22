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
    
@images_bp.route('/api/images', methods=['POST'])
@jwt_required()
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part.'}), 400
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'message': 'No selected file.'}), 400
    
    if file and ImageUtils.allowed_file(file.filename):
        filename = secure_filename(file.filename)
        unique_filename = f"{uuid4()}_{filename}"  # Unique names
        image_path = os.path.join(Config.UPLOAD_FOLDER, unique_filename)
        
        # Saving
        file.save(image_path)

        return jsonify({
            'message': 'File uploaded successfully.',
            'image_path': image_path
        }), 200
    
    return jsonify({'message': 'File type not allowed.'}), 400

@images_bp.route('/api/images/<string:image_path>', methods=['DELETE'])
@jwt_required()
def delete_image(image_path):

    # Validate
    secure_path = secure_filename(image_path)
    if not os.path.isfile(secure_path):
        return jsonify({'message': 'Image file not found.'}), 404
    
    try:
        # Deleting
        os.remove(secure_path)
        return jsonify({'message': 'Image deleted successfully.'}), 200
    except Exception as e:
        return jsonify({
            'message': 'Error deleting the image.',
            'error': str(e)
        }), 500