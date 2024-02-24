#!/usr/bin/env python3
"""
Definimos una funcion que devuelva
asuncio.Task
"""

import asyncio
from typing import List


# Importamos wait_random del modulo 0-basic_async_syntax.py
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Definimos una funcion y toma un argumento int
    max_delay
    Args:
    n: nro int
    max_delay: int

    Return:
        List(float) con un tiempo de espera
    """
    task = [task_wait_random(max_delay) for _ in range(n)]
    return sorted(await asyncio.gather(*task))
