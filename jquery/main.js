
$(document).ready(function () {
  
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#PSM-on').click(function () {
    thermostat.powerSavingModeOn();
    $('#powerSavingModeOn').text('on')
    updateTemperature()
  })

  $('#PSM-off').click(function () {
    thermostat.powerSavingModeOff();
    $('#powerSavingModeOff').text('off')
    updateTemperature();
  })

  $('#temp-reset').click(function () {
    thermostat.resetTemperature();
    updateTemperature()
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage()); 
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1749f23fb2b07d86d0670b648fe72619', function (data) {
    console.log(data);
  })

  $('#current-city').change(function () {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function (data) {
      $('#current-temperature').text(data.main.temp)
    })
    
  })
});