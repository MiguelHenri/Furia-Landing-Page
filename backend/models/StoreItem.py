from database import db

class StoreItem(db.Model):
    __tablename__ = 'items' # postgres table name
    id = db.Column(db.Integer, nullable=False, autoincrement=True)
    title = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    link = db.Column(db.String(300), nullable=False)
    image_path = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'link': self.link,
            'image_path': self.image_path
        }