from flask import Flask, render_template, request
import json
from database import db

app = Flask(__name__)
app.config.from_object(__name__)

global data

@app.route('/', methods=['GET', 'POST'])
def wok():

    return render_template('index.html')


@app.route('/endpoint', methods=['GET', 'POST'])
def endpoint():

    return render_template('endpoint.html')

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