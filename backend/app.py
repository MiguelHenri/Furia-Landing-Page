import os
from flask import Flask, send_from_directory, abort
from config import Config
from database import db
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes.admins import admins_bp
from routes.matches import matches_bp
from routes.news import news_bp
from routes.store import store_bp
from routes.teams import teams_bp
from routes.images import images_bp

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
db.init_app(app)

# JWT Token Auth
jwt = JWTManager(app)

# Routes
app.register_blueprint(admins_bp)
app.register_blueprint(matches_bp)
app.register_blueprint(news_bp)
app.register_blueprint(store_bp)
app.register_blueprint(teams_bp)
app.register_blueprint(images_bp)

@app.route('/')
def index():
    return send_from_directory(Config.FRONTEND_FOLDER, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    allowed_extensions = {'.js', '.css'}

    if not os.path.splitext(path)[1] in allowed_extensions:
        abort(403)
    
    return send_from_directory(app.config['FRONTEND_FOLDER'], path)

if __name__ == '__main__':
    app.run(debug=False)