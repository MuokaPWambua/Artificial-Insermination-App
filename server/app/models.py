from . import db
from datetime import datetime

class Insemination(db.Model):
    id = db.Column(db.BigInteger, primary_key=True)
    date = db.Column(db.DateTime,  nullable=False, default=datetime.utcnow)
    imp_sem = db.Column(db.Text,  nullable=False)
    hv = db.Column(db.Text,  nullable=False)
    pts = db.Column(db.Text,  nullable=False)
    scheme = db.Column(db.Text,  nullable=False)
    name = db.Column(db.Text,  nullable=False)
    contact = db.Column(db.BigInteger,  nullable=False)
    farm = db.Column(db.Text,  nullable=False)
    owner = db.Column(db.Text,  nullable=False)
    location = db.Column(db.Text,  nullable=False)
    breed = db.Column(db.Text,  nullable=False)
    sire = db.Column(db.Text,  nullable=False)
    calving = db.Column(db.DateTime,  nullable=False)
    pcode = db.Column(db.Text,  nullable=False)
    ear_no = db.Column(db.Text,  nullable=False)
    price = db.Column(db.BigInteger,  nullable=False)
    born =db.Column(db.DateTime)
    bull = db.Column(db.Text)
    
    def __init__(self, data):
        self.scheme = data['scheme']
        self.name = data['name']
        self.imp_sem = data['imp_sem']
        self.farm = data['farm']
        self.sire = data['sire']
        self.owner = data['owner']
        self.contact = data['contact']
        self.hv = data['hv']
        self.pts = data['pts']
        self.location = data['location']
        self.price = data['price']
        self.pcode = data['pcode']
        self.born = data['born']
        self.ear_no = data['ear_no']
        self.bull = data['bull']
        self.calving = data['calving']
        self.breed = data['breed']
