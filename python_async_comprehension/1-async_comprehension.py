#!/usr/bin/env python3
"""
Escriba una rutina llamada async_comprehension
que no acepte argumentos.
"""

import asyncio
import random
from typing import Generator
from typing import List


# Importe async_generator del modulo 0-async_generator.py
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Defina una coroutina recopilará 10 númer
    aleatorios utilizando una comprensión asírona y devuelva
    10 nros aleatorios
    """
    # Itera de forma asincrona y recopila los 10 datos aleatorios
    number = [num async for num in async_generator()]
    return number

if __name__ == "__main__":
    async_comprehension()
