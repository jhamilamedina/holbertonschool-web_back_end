#!/usr/bin/env python3

"""
Devolver una función que multiplique
un float por multiplicador
"""


from typing import Callable


def make_multiplier (multiplier: float) -> Callable [[float], float]:
    """
    Definimos la función y toma multiplicador flotante como
    argumento y devuelve una función que multiplica un flotante
    por un multiplicador
    """

    def multiply (number: float) -> float:
        """
        Se define la función interna que realizará la
        multiplicacion
        """
        return number * multiplier
    
    # Devolvemos la función interna multiply, que está configurada
    # con el multiiplier dado.

    return multiply
