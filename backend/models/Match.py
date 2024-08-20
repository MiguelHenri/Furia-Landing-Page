from database import db

class Match(db.Model):
    __tablename__ = 'matches' # postgres table name
    id = db.Column(db.Integer, nullable=False, autoincrement=True)
    tournament = db.Column(db.String(100), nullable=False)
    player1 = db.Column(db.String(50), nullable=False)
    player2 = db.Column(db.String(50), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    # todo icon

    def to_dict(self):
        return {
            'id': self.id,
            'tournament': self.tournament,
            'player1': self.player1,
            'player2': self.player2,
            'date': self.date.isoformat()
        }