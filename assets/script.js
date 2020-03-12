const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weatherIcon');
const conditions = document.querySelector('.conditions');

// let lat = "39.9526";
// let lon = "-75.1652";
let lat, lon;
let locationData = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=KEY`;

$.ajax({
  url: locationData,
  method: "GET"
}).then(function(response) {
  let currentTemp = response.main.temp;
  let minTemp = response.main.temp_min
  let maxTemp = response.main.temp_max
  let currentConditions = response.weather[0].main;
  let city = response.name;
  console.log("temp is " + currentTemp);
  console.log("conditions are  " + currentConditions);
  console.log("city  " + city);
  console.log("Low is " + minTemp);
  console.log("High is " + maxTemp);
});

//get location coordinates
function success(pos) {
  var crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude

  console.log('Your current position is:');
  console.log('Latitude: ' + lat);
  console.log('Longitude: ' + lon);
}

navigator.geolocation.getCurrentPosition(success);

function updateTemp(){

}

function updateImage(){

}

function updateConditions(){

}
