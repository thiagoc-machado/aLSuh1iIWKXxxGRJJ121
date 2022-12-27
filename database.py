import pymongo
#data = {}

#print(data)


def db(data):
    # Connect to the MongoDB server
    client = pymongo.MongoClient("mongodb://localhost:27017/")

    # Select the database and collection
    db = client["mydatabase"]
    collection = db["mycollection"]

    # Insert the dictionary into the collection
    #collection.insert_one(data)
    print(data)
    # Close the connection to the MongoDB server
    client.close()