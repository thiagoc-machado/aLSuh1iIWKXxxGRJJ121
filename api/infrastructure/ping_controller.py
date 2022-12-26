from flask_restful import Resource


class PingController(Resource):
    def __init__(self, ping_service):
        self.ping_service = ping_service

    def get(self):
        return self.ping_service.ping(), 200
