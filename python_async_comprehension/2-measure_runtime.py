#!/usr/bin/env python3
"""
Define una coroutina de measure_runtime que ejecutar
async_comprehension cuatro veces usando asyncio.gather
"""

import asyncio
from time import time
from typing import Generator


# Importe async_comprehension del modulo 1-async_comprehension.py
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Definimos una coroutina que meda el tiempo de
    ejecución total y devolverl y ejecutará async_comprehensi
    4 veces

    tiempo de ejecución totales 10 segundos

    Return:
        float: Tiempo de ejecucion total
    """
    # Registramos el tiempo de inicio
    start_time = time()
    task = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*task)
    # Registramos el tiempo de finalizacion
    end_time = time()
    # Calculamos el tiempo total
    total_runtime = end_time - start_time
    return total_runtime

if __name__ == "__main__":
    measure_runtime()
