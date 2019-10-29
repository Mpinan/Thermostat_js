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
  
})