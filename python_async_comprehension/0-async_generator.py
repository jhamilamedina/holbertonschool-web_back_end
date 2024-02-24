#!/usr/bin/env python3
"""
Definir una coroutine async_generator
que se repetirá10 veces
"""

import asyncio
import random


async def async_generator() -> Generator[float, None, None]:
    """
    Define una coroutina asincrona que se repita
    10 veces
    """
    # La rutina se repetir 10 veces
    for _ in range(0, 10):
        # Esperamos 1 seg de forma asincrona
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

if __name__ == "__main__":
    async_generator()
