from .models import *
from . import db
from flask import request, jsonify
from datetime import datetime, timedelta
from sqlalchemy import func

def watch_dates():
    now = datetime.utcnow()
    heat = now + timedelta(days=18)
    calving = now + timedelta(days=283)
    heat_ = datetime(heat.year, heat.month, heat.day).strftime("%b %d %Y")
    calving_ = datetime(calving.year, calving.month, calving.day, calving.hour, calving.minute).strftime("%b %d %Y %H:%M")
    return [heat, calving, heat_, calving_] 

def ai_list(results, more):
    if results:
        return jsonify({'data': [{'scheme': s.scheme, 'name': s.name,
            'calving': s.calving, 'ear_no': s.ear_no, 'pcode': s.pcode, 'imp_sem':s.imp_sem,
            'contact':s.contact, 'farm': s.farm, 'owner':s.owner, 'pts':s.pts, 'id':s.id,
            'location':s.location, 'breed':s.breed, 'sire':s.sire, 'hv':s.hv} for s in results],
            'more':more
            })

    return jsonify({'data':[], 'more': False})



def add_data():
    try:
        data = request.json

        if data:
            data['expectancy'] = watch_dates()[1]
            ai_details = Insemination(data)
            db.session.add(ai_details)
            db.session.commit()

            return jsonify({'message': f'next heat cycle on: {watch_dates()[2]}'})
        return jsonify({'message': 'missing input'})
    except Exception as e:
        print(f'Couldnt add insemination {str(e)}')
        return jsonify({'message': 'failed please check your inputs'})


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

def get_amount():
    try:
        amount = Insemination.query.with_entities(func.sum(Insemination.price).label('total')).first().total
        return jsonify({'amount': amount})
    except Exception as e:
        print(e)
        return jsonify({'message': 'NULL'})


def get_heat():
    page = int(request.args.get('page', 0)) * 10
    next_page = page + 1
    more = False

    try:
        heat = Insemination.query.filter_by(date=datetime.utcnow()).limit(30)
        h = heat.offset(page).all()
        more = True if len(heat.offset(next_page).all()) else False

        if heat:
            return ai_list(heat, more)

        return ai_list([], more)
    except Exception as e:
        print(e)
        return ai_list([], more)

