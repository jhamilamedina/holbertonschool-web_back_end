// Se crea una clase Currency

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter para el atributo 'codigo'
  get code() {
    return this._code;
  }

  // Setter para el atributo 'codigo'
  set code(newCode) {
    this._code = newCode;
  }

  // Getter para el atributo 'nombre'
  get name() {
    return this._name;
  }

  // Setter para el atributo 'nombre'
  set name(newName) {
    this._name = newName;
  }

  // Método que muestra los atributos en formato específico
  displayFullCurrency() {
    return `(${this._name}) ${this._code}`;
  }
}
