from db_connect import db

class Project(db.Model):
    __tablename__ = 'metro'
    ID = db.Column(db.Integer, primary_key = True)
    DATE = db.Column(db.String(255), nullable = False)
    RIDE = db.Column(db.Integer, nullable = False)
    ALIGHT = db.Column(db.Integer, nullable = False)
    
    def __init__(self, DATE, RIDE, ALIGHT):
        self.DATE = DATE
        self.RIDE = RIDE
        self.ALIGHT = ALIGHT