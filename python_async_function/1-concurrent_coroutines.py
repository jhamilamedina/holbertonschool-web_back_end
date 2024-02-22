#!/usr/bin/env python3
"""
Escriba una rutina asíncrona llamada waitn
"""

import asyncio
from typing import List
from random import uniform


# Importamos el archivo 0-basic_async_syntax.py
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Definimos una coroutina y toma 2 argumentos int"""
    # Creamos una lista que almacena delays
    delays = []
    # Se crea una lista de task asincronas
    for _ in range(n):
        delays.append(await wait_random(max_delay))

    return (delays)
