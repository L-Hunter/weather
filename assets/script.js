const cityEl = document.querySelector('.city');
const currentTempEl = document.querySelector('#currentTemp');
const lowTempEl = document.querySelector('#lowTemp');
const highTempEl = document.querySelector('#highTemp');
const weatherIcon = document.querySelector('.weatherIcon');
const conditions = document.querySelector('#conditions');
const dataDisplay = document.querySelector('.weatherData');

let lat, lon, locationData, temp, currentTemp, minTemp, maxTemp;

function success(pos) {
  lat = pos.coords.latitude;
  lon = pos.coords.longitude

  locationData = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=KEY`;

  $.ajax({
    url: locationData,
    method: "GET"
  }).then(function(response) {
    currentTemp = response.main.temp;
    minTemp = response.main.temp_min;
    maxTemp = response.main.temp_max;
    let currentConditions = response.weather[0].main;
    let city = response.name;
    cityEl.textContent = city;
    conditions.textContent = currentConditions;
    let icon = response.weather[0].icon;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    renderTemps();
    dataDisplay.style.visibility = 'visible';
    console.log("function done");
  });
}

navigator.geolocation.getCurrentPosition(success);

function convertTemp(k){
 temp = Math.round(((k - 273.15) * 1.8) + 32) + ' F';
 return temp;
}

function renderTemps(){
  currentTemp = convertTemp(currentTemp);
  currentTempEl.textContent = currentTemp;
  minTemp = convertTemp(minTemp);
  lowTempEl.textContent = minTemp;
  maxTemp = convertTemp(maxTemp);
  highTempEl.textContent = maxTemp;
}
