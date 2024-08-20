from database import db

class Admin(db.Model):
    __tablename__ = 'admins' # postgres table name
    username = db.Column(db.String(50), primary_key=True)
    password_hash = db.Column(db.String(256), nullable=False)

    def to_dict(self):
        return {
            'username': self.username,
        }