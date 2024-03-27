// Se implementa la clase Car

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Método cloneCar
  cloneCar() {
    // Devuelve un nuevo objeto de la clase con los mismos atributos.
    return new Car(this._brand, this._motor, this._color);
  }
}
