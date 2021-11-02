from flask_restful import Resource
from .crud import *

class AIResource(Resource):
    def get(self):
        pass
    def post(self):
        return add_data()
    def delete(self):
        pass
    def update(self):
        pass
