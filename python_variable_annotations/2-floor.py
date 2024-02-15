#!/usr/bin/env python3
"""
Retorna un float
"""

from typing import Tuple


def floor(n: float) -> int:
    """
    Define la función Calcula el entero más grande que no
    sea mayor que el número dado n.

    param n: Un nro de punto flotante
    Return: El entero mas grande q no sea mayor a n
    """
    return int(n // 1)
