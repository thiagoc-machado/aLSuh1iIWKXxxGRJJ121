class PingService:

    def __init__(self, database):
        self.database = database

    def ping(self):
        self.database.engine.execute('SELECT 1+1')
        return {"data": "pong"}
