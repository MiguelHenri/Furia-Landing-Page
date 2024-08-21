from database import db

class NewsPost(db.Model):
    __tablename__ = 'news' # postgres table name
    id = db.Column(db.Integer, nullable=False, autoincrement=True, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    text = db.Column(db.String(300), nullable=False)
    link = db.Column(db.String(300), nullable=False)
    image_path = db.Column(db.String(100), nullable=False)
    alt = db.Column(db.String(300))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'text': self.text,
            'link': self.link,
            'image_path': self.image_path,
            'alt': self.alt
        }