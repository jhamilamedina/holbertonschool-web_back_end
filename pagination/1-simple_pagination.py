#!/usr/bin/env python3
"""
Si los argumentos estan fuera del rango devolver una
lista vacia
"""


import csv
import math
from typing import List


def index_range(page, page_size):
    """
    Funcion que toma 2 argumentos y devuelve
    una Tuple
    Args:
        page (int): nro de pagina
        page_size (int): tamaño de pagina
    Return:
        Tuple of size
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)

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
        assert isinstance(page, int) and page > 0, "La página debe ser un entero mayor que 0"
        assert isinstance(page_size, int) and page_size > 0, "El size debe ser > 0"""
        start_index, end_index = index_range(page, page_size)

        if start_index >= len(self.dataset()) or end_index <= 0:
            return []
        else:
            return self.dataset()[start_index:end_index]