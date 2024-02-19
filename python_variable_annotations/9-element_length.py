#!/usr/bin/env python3

"""
Anotar los parametros de la funcion
y los valores de retorno
"""


from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Definimos la función y toma una lista de string(cadena)
    y devuelve una lista de Tuple donde cada tuple contiene
    un string
    """

    # Lista que genera tuplas con cada elemento y su longitud
    return [(i, len(i)) for i in lst]
