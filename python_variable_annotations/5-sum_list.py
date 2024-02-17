#!/usr/bin/env python3
"""
Lista de flotantes
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    total: float = 0.0

    for num in input_list:
        total += num
    return total
