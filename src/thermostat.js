class Thermostat {
  constructor() {
    this.MIN_TEMPERATURE = 10;
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature
  }

  up() {
    this.temperature += 1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }
}