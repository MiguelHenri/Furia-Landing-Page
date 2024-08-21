from flask import Flask
from config import Config
from database import db
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes.admins import admins_bp
from routes.matches import matches_bp
from routes.news import news_bp
from routes.store import store_bp
from routes.teams import teams_bp

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

if __name__ == '__main__':
    app.run(debug=True)