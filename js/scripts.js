//retrieving weather data for temperature
var to_be_run_on_server_response = function (weather_data) {
    $('.temp').append(weather_data.main.temp);
    $('.min-temp').append(weather_data.main.temp_min);
    $('.max_temp').append(weather_data.main.temp_max);
    $('.weather-conditions').append(weather_data.weather[0].description);
    $('.wind-speed').append(weather_data.wind.speed);
    $('.sunrise-time').append(weather_data.sys.sunrise * 1000);
    $('.sunset-time').append(weather_data.sys.sunset * 1000);
}












$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=e7731b890560fcf7adba8c66b73fc322',
    success: function(weather_data) {
         console.log('3');
        to_be_run_on_server_response(weather_data);
         console.log('4');
    }
})

