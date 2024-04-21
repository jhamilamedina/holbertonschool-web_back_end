export default function cleanSet(set, startString) {
  let result = ''; // Paso 1: Inicializa una cadena vacía

  set.forEach((value) => { // Paso 2: Itera sobre cada valor en el conjunto
    if (value.startsWith(startString)) { // Paso 3: Verifica si el valor comienza con startString
      const restOfString = value.slice(startString.length); // Paso 4: Obtiene el resto de la cadena
      result += (result === '' ? '' : '-') + restOfString; // Agrega el valor a la cadena resultante
    }
  });

  return result; // Paso 5: Devuelve la cadena resultante
}
