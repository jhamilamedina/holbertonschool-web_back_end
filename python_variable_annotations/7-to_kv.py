#!/usr/bin/env python3
"""
Se define una anotacion to_kv
"""


from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Devuelve una tupla donde el primer elemento es la cadena k
    y el segundo elemento es el cuadrado de int/float v.

    Parameters:
        k (cadena): una cadena.
        v (Unión [int, flotante]): un número entero o un flotante

    Returns:
        Tupla[str, float]: una tupla que contiene k y el cuadrado
        de v.
    """
    return (k, v ** 2.0)
