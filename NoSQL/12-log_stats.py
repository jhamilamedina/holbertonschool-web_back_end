#!/usr/bin/env python3
"""Muestra las estadísticas de la base de datos logs"""

from pymongo import MongoClient


if __name__ == '__main__':
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client['logs']
    collection = db['nginx']

    try:
        total_documents = collection.count_documents({})
        total_status = collection.count_documents({"path": "/status"})

        methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
        totales = [collection.count_documents({"method": method}) for method in methods]

        print(f'{total_documents} logs')
        print('Methods:')
        for i, method in enumerate(methods):
            print(f'\tmethod {method}: {totales[i]}')
        print(f'{total_status} status check')
    except Exception as e:
        print(f'Error: {e}')