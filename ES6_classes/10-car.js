// Se implementa la clase Car

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Método cloneCar
  cloneCar() {
    const newCar = new Car();
    Object.setPrototypeOf(newCar, Object.getPrototypeOf(this));
    return newCar;
  }
}
