#!/usr/bin/env python3
"""
Función que cambien los topics en school
"""


def update_topics(mongo_collection, name, topics):
    """
    Define una funcion con 3 argumentos
    Args:
        mongo_collection: Objeto de la coleccion de pymongo
        name: (string) de la escuela a actualizar
        topics: (lista de string) Lista de temas abordados en la school
    Return:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}})