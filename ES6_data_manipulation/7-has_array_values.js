/** Cree una función que devuelva un valor booleano si todos
 * los elementos de la matriz existen dentro del conjunto */

export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
