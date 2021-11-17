from .models import *
from . import db
from flask import request, jsonify
from datetime import datetime, timedelta

def watch_dates():
    now = datetime.utcnow()
    heat = now + timedelta(days=18)
    calving = now + timedelta(days=283)
    return 'next heat check' + ' ' + str(heat) + ' ' + 'expected calving date' + ' ' +  str(calving)

def ai_list(results, more):
    if results:
        return jsonify({'data': [{'scheme': s.scheme, 'name': s.name,
            'calving': s.calving, 'ear_no': s.ear_no, 'pcode': s.pcode, 'imp_sem':s.imp_sem,
            'contact':s.contact, 'farm': s.farm, 'owner':s.owner, 'pts':s.pts,
            'location':s.location, 'breed':s.breed, 'sire':s.sire, 'hv':s.hv} for s in results],
            'more':more
            })

    return jsonify({'data':[], 'more': False})



def add_data():
    try:
        data = request.json

        if data:
            ai_details = Insemination(data)
            db.session.add(ai_details)
            db.session.commit()

            return jsonify({'message': watch_dates()})
        return jsonify({'message': 'missing keys'})
    except Exception as e:
        print(f'Couldnt add insemination {str(e)}')
        return jsonify({'message': 'failed'})


def get_data():
    offset = int(request.args.get('offset', 0))
    current_offset = offset * 10
    next_offset = offset + 1 * 10
    more = False
    
    try:
        result = Insemination.query.limit(10)

        current = result.offset(current_offset).all()
        next_page = result.offset(next_offset).all()
        if next_page:
            more = True

        return ai_list(result, more)    

    except Exception as e:
        print(f'cant get {str(e)}')
        return ai_list([], False)



def search_data(search):
    offset = int(request.args.get('offset', 0))
    current_offset = offset * 10
    next_offset = offset + 1 * 10
    more = False
    search = f'%{search}%'

    try:
        result = Insemination.query.filter(Insemination.owner.like(search)| Insemination.ear_no.like(search)| \
                Insemination.pcode.like(search))

        current = result.limit(10).offset(current_offset).all()
        next_page = result.limit(10).offset(next_offset).all()
        if next_page:
            more = True

        return ai_list(result, more)    

    except Exception as e:
        print(f'cant get {str(e)}')
        return ai_list([], False)


def get_single_data(ai_id):
    try:
        result = Insemination.query.filter_by(id=ai_id).first()
        if result:
            return ai_list(result, False)
        return ai_list([], False)
    except Exception as e:
        print(f'could not find data {str(e)}')
        return ai_list([], False)


def delete_data(ai_id):
    try:
        ai = Insemination.query.filter_by(id=ai_id).first()
        db.session.delete(ai)
        db.session.commit()
        return jsonify({'message': 'deleted from list'})
    except Exception as e:
        print(f'could not delete {str(e)}')
        return jsonify({'message': 'could not delete'})


def update_data(ai_id):
    data = request.get_json()
    try:
        update = {}

        if data:
            for key, value in data.items():
                update[key] = value

        if update:
            Insemination.query.filter_by(id=ai_id).update(update)
            db.session.commit()
            return jsonify({'message': 'data updated'})

        return jsonify({'message': 'no data to be updated'})
    except Exception as e:
        print(f'failed to update {str(e)}')
        return jsonify({'message': 'failed to update'})

