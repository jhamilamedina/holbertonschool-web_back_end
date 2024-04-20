// Cree una funcion que devuelva un mapa actualizado para todos los artículos
// con una cantidad inicial de 1.
// Definimos una funcion que recibe inputMap como argumento
export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  inputMap.forEach((cantidad, producto) => {
    if (cantidad === 1) {
      updatedMap.set(producto, 100);
    } else {
      updatedMap.set(producto, cantidad);
    }
  });

  return updatedMap;
}
