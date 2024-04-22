/** Cree una función que devuelva una cadena de todos
 * los valores establecidos que comiencen con una cadena
 * específica (startString) */

export default function cleanSet(set, startString) {
  let result = ''; // Inicializar la cadena de salida

  // Iterar sobre los elementos del conjunto
  for (const item of set) {
    // Verificar si el elemento comienza con startString
    if (item.startsWith(startString)) {
      // Agregar el resto del elemento a la cadena de salida
      result += `${item.substring(startString.length)}-`;
    }
  }

  // Eliminar el último guión si la cadena no está vacía
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}
