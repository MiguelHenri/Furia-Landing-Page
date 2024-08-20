from database import db

class NewsPost(db.Model):
    __tablename__ = 'news' # postgres table name