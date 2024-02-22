#!/usr/bin/env python3
"""
Definimos una funcion asyncrona
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Definimos una coroutina wait_random"""
    # Generamos un retraso aleatorio entre 0 y max_delay segundos
    delay: float = random.uniform(0, max_delay)
    # Esperamos el retraso usando asyncio.sleep()
    await asyncio.sleep(delay)
    # Devolvemos el retraso
    return delay
