#!/usr/bin/env python3
"""
Definimos una funcion que devuelva
asuncio.Task
"""

import asyncio


# Importamos wait_random del modulo 0-basic_async_syntax.py
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Definimos una funcion y toma un argumento int
    max_delay
    Args:
    max_delay: int

    Return:
        Devuelve asyncio.Task
    """
    return asyncio.create_task(wait_random(max_delay))
