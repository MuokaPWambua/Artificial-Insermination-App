from .models import *
from . import db
from flask import request, jsonify
from datetime import datetime, timedelta

def watch_dates():
    now = datetime.utcnow()
    heat = now + timedelta(days=18)
    calving = now + timedelta(days=283)
    return 'next heat check' + ' ' + heat + ' ' + 'expected calving date' + ' ' +  calving


def add_data():
    try:
        data = request.get_json()

        if data:
            ai_details = Insemination(data['scheme'], data['name'], data['calving'], data['ear_no'], data['pcode'], 
                    data['imp_sem'], data['contact'], data['farm'], data['owner'], data['pts'],
                    data['location'], data['breed'], data['sire'], data['hv'])
            db.session.add(ai_details)
            db.session.commit()
            return jsonify({'message': watch_dates()})
        return jsonify({'message': 'missing keys'})
    except Exception as e:
        print(f'Couldnt add insemination {str(e)}')
        return jsonify({'message': 'failed'})

def get_data(search):
    search = f'%{search}%'
    try:
        result = Insemination.query.filter(Insemination.owner.like(search)| 
                Insemination.ear_no.like(search)| Insemination.pcode.like(search)).all()
        return jsonify({'search': [{'scheme': s.sheme, 'name': s.name,
            'calving': s.calving, 'ear_no': s.ear_no, 'pcode': pcode, 'imp_sem':imp_sem,
            'contact':s.contact, 'farm': s.farm, 'owner':s.owner, 'pts':s.pts,
            'location':s.location, 'breed':s.breed, 'sire':s.sire, 'hv':s.hv} for s in result]})
    except Exception as e:
        print(f'cant get {str(e)}')
        return jsonify({'message': 'failed to get'})

def delete_data(ai_id):
    pass

def update_data(ai_id):
    pass
