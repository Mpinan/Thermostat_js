
$(document).ready(function () {

  var thermostat = new Thermostat();
  updateTemperature();

  tempUp.addEventListener("click", function () {
    thermostat.up();
    updateTemperature();
  });

  tempDown.addEventListener('click', function () {
    thermostat.down();
    updateTemperature();
  });

  powersavingOn.addEventListener('click', function () {
    console.log('click')
    thermostat.powerSavingModeOn();
    $('#powerSavingModeOn').text('on')
    updateTemperature()
  })

  powersavingOff.addEventListener('click', function () {
    console.log('click')
    thermostat.powerSavingModeOff();
    $('#powerSavingModeOff').text('off')
    updateTemperature();
  })

  tempReset.addEventListener('click', function () {
    console.log('click')
    thermostat.resetTemperature();
    updateTemperature()
  });

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