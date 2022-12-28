import json
import sqlite3

def db(data):

    # Connect to the database
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()

    # Create the table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS mytable (
            id INTEGER PRIMARY KEY,
            key1 TEXT,
            key2 TEXT,
            key3 TEXT
            key4 TEXT
            key5 TEXT
            key6 TEXT
            key7 TEXT
            key8 TEXT
            key9 TEXT
            key10 TEXT
            key11 TEXT
            key12 TEXT
            key13 TEXT
            key14 TEXT
            key15 TEXT
            
        )
    ''')

    # Insert the data into the table
    for item in data:
        cursor.execute('''
            INSERT INTO mytable (key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key13, key14,key15)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (item['key1'], item['key2'], item['key3'], item['key4'], item['key5'], item['key6'], item['key7'], item['key8'], item['key9'], item['key10'], item['key11'], item['key12'], item['key13'], item['key14'], item['key15']))

    # Commit the changes and close the connection
    conn.commit()
    print("db gravado")
    conn.close()
