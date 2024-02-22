#!/usr/bin/env python3
"""Crear una funcion de medida a tiempo"""

import warnings
from time import time
from random import uniform

warnings.filterwarnings('ignore', category=RuntimeWarning)

# Importamos el file 1-concurrent_coroutines.py
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Definimos una funcion que mide el tiempo

    Args:
        n: nro entero
        max_delay: argumento que mide el tiempo total
                   de ejecucion de wait_n
    Return:
        el total_time/n como float
    """
    # Registramos el tiempo de inicio
    inic_total = time()

    # Llamamos a la funcion wait para medir su tiempo de ejecucion
    wait_n(n, max_delay)

    # Registro del tiempo de finalizacion
    fin_total = time()
    # Calculamos el tiempo total transcurrido
    return (fin_total - inic_total) / n
