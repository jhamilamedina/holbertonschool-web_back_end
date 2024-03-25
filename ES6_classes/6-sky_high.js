// Class SkyHighBuilding

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  // Atributos del constructor:
  constructor(sqft = 0, floors = 0) {
    // Llame al constructor de la clase principal usando super
    super(sqft);
    // floors (Number)
    this._floors = floors;
  }

  // Implemente un getter para cada atributo.
  get floors() {
    return this._floors;
  }

  // Anula el método llamado evacuationWarningMessage
  // Devuelve el string Evacua lentamente los NUMBER_OF_FLOORS pisos.
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
