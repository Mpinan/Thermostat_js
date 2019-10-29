'use strict';

describe('Thermostat', function () {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat
  })

  it('starts at 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increase the temperature', function () {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });

  it('decrease the temperature', function () {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })

  it('has a minimum of 10 degrees', function () {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('can switch PSM off', function () {
    thermostat.powerSavingModeOff();

    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can switch PSM back on', function () {
    thermostat.powerSavingModeOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.powerSavingModeOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('when power saving mode is on', function () {
    it('has a maximum temperature of 25 degrees', function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function () {
    it('has a maximum temperature of 32 degrees', function () {
      thermostat.powerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it('can be reset to the default temperature', function () {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('displaying usage levels', function(){
    describe('when the temperature is below 18 degrees', function(){
      it('it is considered low-usage', function(){
        for (var i = 0; i < 3; i++){
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25', function(){
      it('it is considered medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function(){
      it('it is considered high-usage', function(){
        thermostat.PWS = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
      expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});