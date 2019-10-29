'use strict';

class Thermostat {
  constructor() {
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.DEFAULT_TEMPERATURE = 20;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MIN_TEMPERATURE = 10;
    this.temperature = this.DEFAULT_TEMPERATURE;
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

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }

  isMaximumTemperature(){
    if (this.isPowerSavingOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
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

  resetTemperature() {
    return this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage(){
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    } else if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
      return 'medium-usage';
    } else {
      return 'high-usage' ;
  };
}
}