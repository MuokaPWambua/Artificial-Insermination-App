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
    calving = db.Column(db.Text,  nullable=False)
    pcode = db.Column(db.Text,  nullable=False)
    ear_no = db.Column(db.Text,  nullable=False)
    price = db.Column(db.Text,  nullable=False)
    
    def __init__(self, scheme, name, calving, ear_no, pcode, imp_sem,
            contact, farm, owner, pts, location, breed, sire, hv):
        self.scheme = scheme
        self.name = name
        self.imp_sem = imp_sem
        self.farm = farm
        self.sire = sire
        self.owner = owner
        self.contact = contact
        self.hv = hv
        self.pts = pts
        self.location = location
        self.price = price
        self.pcode = pcode
        self.ear_no = ear_no
