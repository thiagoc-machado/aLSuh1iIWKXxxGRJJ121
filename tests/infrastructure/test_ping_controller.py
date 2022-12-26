from unittest import TestCase
from unittest.mock import MagicMock

from api.application.ping_service import PingService
from api.infrastructure.ping_controller import PingController


class PingControllerTest(TestCase):

    def setUp(self):
        self.database = MagicMock()
        ping_service = PingService(self.database)
        self.ping_controller = PingController(ping_service)

    def test_it_should_return(self):
        result, status = self.ping_controller.get()

        self.database.engine.execute.assert_called_once_with("SELECT 1+1")
        self.assertEqual(result, {"data": "pong"})
        self.assertEqual(status, 200)
