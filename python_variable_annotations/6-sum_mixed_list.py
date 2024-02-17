#!/usr/bin/env python3
"""
Devolver la suma de una lista de
flotantes
"""

from typing import List


def sum_mixed_list(mxd_lst: List[int]) -> float:
    """
    Resume una lista de números enteros y flotantes
    y devuelve su suma como flotante.

    Args:
        mxd_lst (List[float]): Lista de n° flotantes

    Return:
        float: La suma de los elementos de la lista
    """
    suma = 0.0  # Inicializa una variable para almacenar la suma total

    for num in mxd_lst:  # Iteramos sobre cada elemento de la lista
        suma += num  # Sumamos el elemento actual a suma
    return suma  # Devolvemos la suma como resul de la función
