#!/usr/bin/env python3
"""
Si los argumentos estan fuera del rango devolver una
lista vacia
"""


import csv
import math
from typing import List

# Se importa el modulo 0-simple_helper_function.py
index_range = __import__('0-simple_helper_function').index_range


def entero_positivo(valor: int) -> None:
    """Valida que sea un nro entero positivo"""
    assert isinstance(valor, int), AssertionError
    assert valor > 0, AssertionError


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

        entero_positivo(page)
        entero_positivo(page_size)

        start_index, end_index = index_range(page, page_size)

        return self.dataset()[start_index: end_index]
