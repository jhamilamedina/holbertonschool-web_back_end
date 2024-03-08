#!/usr/bin/env python3
"""
Si los argumentos estan fuera del rango devolver una
lista vacia
"""


import csv
import math
from typing import List, Dict, Any

# Se importa el modulo 0-simple_helper_function.py
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Entrega un un slice con la paginación solicitad
        Args:
            page(int): Nro de paginas
            page_size(int): cantidad de items a devolver
        
        Return:
            list: [:] Un slice con la items solicitados
        """
        assert isinstance(page, int) and page > 0, """La pag > 0"""
        assert isinstance(page_size, int) and page_size > 0, """El size > 0"""

        star_index, end_index = index_range(page, page_size)
        if star_index >= len(self.dataset()) or end_index <= 0:
            return []
        else:
            return self.dataset()[star_index: end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Define get_hyper con los mismos argumentos y valores de la funcion
        get_page y retorne un dict que contenga los pares key_value

        Args:
            page_size(int): long de la pag de datos devueltos
            page(int): Nro de pagina actual
            data: la pag de conjunto de datos
            next_page(int): Nro de la pag siguiente
            prev_page(int): Nro de la pag posterior
            total_pages(int): nro total de paginas
        Return:
            Dict con la hypermedia de la pagination
        """
        assert isinstance(page, int) and page > 0, """La pag > 0"""
        assert isinstance(page_size, int) and page_size > 0, """El size > 0"""

        page_data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
                "page_size": len(page_data),
                "page": page,
                "data": page_data,
                "next_page": next_page,
                "prev_page": prev_page,
                "total_pages": total_pages
                }
