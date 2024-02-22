#!/usr/bin/env python3


import asyncio
import random


async def wait_random(max_delay=10):
    # Generamos un retraso aleatorio entre 0 y max_delay segundos
    delay = random.uniform(0, max_delay)
    # Esperamos el retraso usando asyncio.sleep()
    await asyncio.sleep(delay)
    # Devolvemos el retraso
    return delay


async def main():
    # Llamamos wait_ramdom con un valor espec√fico
    delay = await wait_random(5)
    print(f" Esperamos {delay} segundos")


# Ejecutamos el bucle de asyncio para
# la rutina principal
asyncio.run(main())
