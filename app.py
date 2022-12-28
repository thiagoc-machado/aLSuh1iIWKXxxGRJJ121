from flask import Flask, render_template, request, jsonify
import json
from db import db, read_db

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['GET', 'POST'])
def wok():
    data_out = json.dumps(read_db())
    return render_template('index.html',data_out=data_out)

@app.route('/endpoint', methods=['GET', 'POST'])
def endpoint():
    data_out = json.dumps(read_db())
    return render_template('endpoint.html', data_out=data_out)

@app.route('/api', methods=['GET', 'POST'])
def api():
    data_out = read_db()
    return render_template('api.html', data_out=data_out)

@app.route('/receive_json', methods=['POST'])
def receive_json():
    data = request.get_json()
    if data is None:
        print("Erro ao receber os dados")
        return "Não foi possível receber os dados em formato JSON", 400
    print("Sucesso ao receber os dados")
    db(data)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':

    app.run(debug=True)