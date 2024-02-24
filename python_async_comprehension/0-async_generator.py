#!/usr/bin/env python3
"""
Definir una coroutine async_generator
que se repetirá10 veces
"""

import asyncio
import random


async def async_generator():
    """
    Define una coroutina asincrona que se repita
    10 veces
    """
    # La rutina se repetirá10 veces
    for _ in range(10):
        # Esperamos 1 seg de forma asincrona
        await asyncio.sleep(1)
    # Generamos un nro aleatorio del 0 al 10
    random_number = random.randint(0, 10)
    yield random_number

if __name__ == "__main__":
    asyncio.run(async_generator)
