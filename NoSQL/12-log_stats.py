#!/usr/bin/env python3
"""
Muestra las estadísticas sobre los registros de Nginx 
almacenados en MongoDB
"""

from pymongo import MongoClient


# Conexión a la base de datos de MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['logs']
collection = db['nginx']

# Estadísticas generales
total_logs = collection.count_documents({})

# Métodos
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
method_counts = {method: collection.count_documents({"method": method}) for method in methods}

# Ruta /status con método GET
status_count = collection.count_documents({"method": "GET", "path": "/status"})

# Presentación de los resultados
print(f"first line: {total_logs} logs where {total_logs} is the number of documents in this collection")
print("second line: Methods:")
for method, count in method_counts.items():
    print(f"\t{count} {method}")

print(f"\t{status_count} documents with method=GET and path=/status")