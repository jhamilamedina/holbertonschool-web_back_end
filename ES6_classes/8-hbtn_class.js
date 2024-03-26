// Implementar la clase HolbertonClass

export default class HolbertonClass {
  // Definimos la clase HolbertonClass
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Definimos el metodo valueOf y devuelve el tamaño
  valueOf() {
    return this._size;
  }

  // Definimos un metodo To String y devuelve la ubicacion
  toString() {
    return this._location;
  }
}
