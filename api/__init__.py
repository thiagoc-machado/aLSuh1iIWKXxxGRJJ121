import os

from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from api.infrastructure.ping_controller import PingController
from api.urls import register_routes

__version__ = '0.1.0'


def create_db(app):
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{}:{}@{}/{}'.format(
        os.environ.get("POSTGRES_USER"),
        os.environ.get("POSTGRES_PASSWORD"),
        os.environ.get("POSTGRES_NAME"),
        os.environ.get("POSTGRES_DB"),
    )
    db = SQLAlchemy(app)

    return db


def create_api():
    app = Flask(__name__)
    db = create_db(app)

    api = Api(app)

    register_routes(api, db)

    return api, db
