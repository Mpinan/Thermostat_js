class Thermostat {
  constructor() {
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MIN_TEMPERATURE = 10;
    this.temperature = 20;
    this.PWS = true;
  }

  getCurrentTemperature() {
    return this.temperature
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMaximumTemperature(){
    if (this.isPowerSavingOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }

  isPowerSavingOn() {
    return this.PWS === true;
  }

  powerSavingModeOff() {
    return this.PWS = false;
  }

  powerSavingModeOn() {
    return this.PWS = true
  }
}