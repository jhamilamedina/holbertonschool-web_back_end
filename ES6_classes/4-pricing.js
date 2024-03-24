// Implemente una clase llamada Precios:
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Implementar setter y getter para cada atributo
  get amount() {
    return this._amount;
  }

  // Setter para el atributo amount
  set amount(NewAmount) {
    this._amount = NewAmount;
  }

  // Getter para el atributo currency
  get currency() {
    return this._currency;
  }

  // Setter  para el atributo currency
  set currency(NewCurrency) {
    this._amount = NewCurrency;
  }

  // Implemente un método llamado displayFullPrice
  displayFullPrice() {
    return `${this._amount} ${this._currency.name}_${this._currency.code}`;
  }

  // Implemente un método estático llamado convertPrice.
  static convertPrice(currency, conversionRate) {
    return currency * conversionRate;
  }
}
