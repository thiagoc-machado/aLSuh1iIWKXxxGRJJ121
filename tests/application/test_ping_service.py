from unittest import TestCase
from unittest.mock import MagicMock

from api.application.ping_service import PingService

class PingServiceTest(TestCase):

    def setUp(self):
        self.database = MagicMock()
        self.ping_service = PingService(self.database)

    def test_it_should_return(self):
        result = self.ping_service.ping()

        self.database.engine.execute.assert_called_once_with("SELECT 1+1")
        self.assertEqual(result, {"data": "pong"})
