// Implementa la clase Building:
export default class Building {
  // Atributos del constructor:
  constructor(sqft) {
    // Considere esta clase como una clase abstracta.
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    // sqft (Numberos)
    this._sqft = sqft;
  }

  // Implemente un getter para cada atributo.
  get sqft() {
    return this._sqft;
  }

  // Impemente la clase setter
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
