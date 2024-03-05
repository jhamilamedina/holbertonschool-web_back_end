#!/usr/bin/env python3
"""
Función index_range que tome dos argumentos enteros, página y
tamaño de página.
"""

from typing import Tuple


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