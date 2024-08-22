from database import db
from flask import url_for
from config import Config

class StoreItem(db.Model):
    __tablename__ = 'items' # postgres table name
    id = db.Column(db.Integer, nullable=False, autoincrement=True, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    link = db.Column(db.String(300), nullable=False)
    image_path = db.Column(db.String(100), nullable=False)
    alt = db.Column(db.String(300))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'link': self.link,
            'image_path': Config.FLASK_HOST + url_for('Image.serve_file', filename=self.image_path),
            'alt': self.alt
        }