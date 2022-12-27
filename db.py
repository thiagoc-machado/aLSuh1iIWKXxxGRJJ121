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
        )
    ''')

    # Insert the data into the table
    for item in data:
        cursor.execute('''
            INSERT INTO mytable (key1, key2, key3)
            VALUES (?, ?, ?)
        ''', (item['key1'], item['key2'], item['key3']))

    # Commit the changes and close the connection
    conn.commit()
    conn.close()
