from api.application.ping_service import PingService
from api.infrastructure.ping_controller import PingController


def register_routes(api, database):
    ping_service = PingService(database)

    api.add_resource(PingController, '/ping', resource_class_kwargs={'ping_service': ping_service})
