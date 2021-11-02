import os
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_caching import Cache
from flask_migrate import Migrate

db = SQLAlchemy()

migrate = Migrate()
cache = Cache()
upload_path = os.path.abspath('media')


def create_app(test_config=None):
    if not upload_path:
        try:
            os.makedirs(os.path.abspath('media'))
        except OSError:
            pass

    app = Flask(__name__, instance_relative_config=True, static_url_path=upload_path, static_folder=upload_path)
    CORS(app)

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)

    else:
        app.config.from_mapping(test_config)

    cache.init_app(app, config={'CACHE_TYPE': 'simple'})
    db.init_app(app)

    migrate.init_app(app, db)
    app.app_context().push()

    api = Api(app, catch_all_404s=True)
    from .resource import AIResource

    api.add_resource(AIResource, '/')
 
    try:
        db.create_all()
    except:
        pass

    return app


if __name__ == '__main__':
    create_app()
