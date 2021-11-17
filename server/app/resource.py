from flask_restful import Resource
from .crud import *
from flask import request, jsonify

class AIResource(Resource):
    def get(self, search=None, ai_id=None):
        if str(request.url_rule) == '/list': 
            return get_data()

        if (str(request.url_rule) == '/list/search/<search>') and search:
            return search_data(search)

        if (str(request.url_rule) == '/list/ai/<int:ai_id>') and ai_id:
            return get_single_data(ai_id)

        if str(request.url_rule) == '/amount':
            pass

        return jsonify({'message': 'Check url'})

    def post(self):
        return add_data()

    def delete(self, ai_id):
        return delete_data(ai_id)

    def update(self, ai_id):
        return update_data(ai_id)

