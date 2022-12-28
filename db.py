import json
import sqlite3

def db(data):
    print(data)
    conn = sqlite3.connect(
        'orders.db'
        )
        
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO orders (client, date, valor, item1, item1_qtd, item1_extra, item2, item2_qtd, item2_extra, item3, item3_qtd, item3_extra, item4, item4_qtd, item4_extra)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (data['client'], data['date'], data['valor'], data['item1'], data['item1_qtd'], data['item1_extra'], data['item2'], data['item2_qtd'], data['item2_extra'], data['item3'], data['item3_qtd'], data['item3_extra'], data['item4'], data['item4_qtd'], data['item4_extra']))

    conn.commit()
    conn.close()

def create_table():
    conn = sqlite3.connect('orders.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE orders (
            client text,
            date text,
            valor real,
            item1 text,
            item1_qtd integer,
            item1_extra text,
            item2 text,
            item2_qtd integer,
            item2_extra text,
            item3 text,
            item3_qtd integer,
            item3_extra text,
            item4 text,
            item4_qtd integer,
            item4_extra text
        )
    ''')

#create_table()

def read_db():
    conn = sqlite3.connect(
        'orders.db',

        #UTF8 compatible
        #detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES,
        #uri=True
    )

    cursor = conn.cursor()
    cursor.execute('SELECT * FROM orders')
    results = cursor.fetchall()
    data_out = json.dumps(results, ensure_ascii=False)
    conn.close()
    return data_out

