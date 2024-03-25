// Implementar la clase Airport

export default class Airport {
  constructor(name = '', code = '') {
    this._name = name;
    this._code = code;
  }

  // Definimos el metodo toString
  toString() {
    return `[object ${this._code}]`;
  }
}
