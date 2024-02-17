#!/usr/bin/env python3
"""
Lista de flotantes
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Define una funcion y suma los elementos
    de la lista de números flotantes

    Args:
        input_list (List[float]): Lista de nros flotantes

    Return:
        La suma de los elementos de la lista
    """
    total: float = 0.0

    for num in input_list:
        total += num
    return total
