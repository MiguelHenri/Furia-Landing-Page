from database import db

class StoreItem(db.Model):
    __tablename__ = 'items' # postgres table name