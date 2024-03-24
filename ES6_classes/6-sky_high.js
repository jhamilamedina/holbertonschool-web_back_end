// Clase SkyHighBuilding

// Importa la clase Building del modulo 5-building.js
import Building from './5-building.js';

// Implemente la clase SkyHighBuilding con extiencion Building:
export default class SkyHighBuilding extends Building {
  // Atributos del constructor:
  constructor(sqft, floors) {
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
