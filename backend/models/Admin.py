from database import db

class Admin(db.Model):
    __tablename__ = 'admins' # postgres table name