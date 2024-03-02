#!/usr/bin/env python3
"""
Funcion que devuelva la lista de escuelas 
que tienen un tema específico
"""


def schools_by_topic(mongo_collection, topic):
    """
    Define una funcion que tome 2 argumentos

    Args:
        mongo_collection: Objeto de la coleccion de pymongo
        topic: Será el tema buscado
    Return:
        Lista de school
    """
    schools = mongo_collection.find({"topics": topic})
    return schools