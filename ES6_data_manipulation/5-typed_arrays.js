/** Crea una función que devuelva un nuevo ArrayBuffer con un
 * valor Int8 en una posición específica */

export default function createInt8TypedArray(length, position, value) {
/** Se crea la función createInt8TypedArray que recibe 3 argumentos
 * Args:
 *  length: longitud del nuevo ArrayBuffer
 *  position: la posición en la que se colocará el valor
 *  value: valor Int8 que se añadirá en la posición determinada
*/
  // Verificamos si esta dentro del rango valido del ArrayBuffer y si no
  // se lanza un error
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // Creamos un nuevo ArrayBuffer

  // Creamos una vista DataView del ArrayBuffer para poder acceder y
  // modificar los datos en formato setInt8
  const view = new DataView(buffer);

  // Asignamos el valor value en la posición position dentro del setInt8
  view.setInt8(position, value);

  return view;
}
