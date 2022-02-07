// Weather API_KEY
const API_KEY = "27d5206b6b8a3e5de6084cc0618b62bb";

// GeoOk function
function onGeoOk(position) {
  // latitude value
  const lat = position.coords.latitude; // 위도
  // longitude value
  const lon = position.coords.longitude; // 경도
  // weather API url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // Communication data
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // weather container
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // data city
      city.innerText = data.name;
      // data Weather
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

// GeoError function
function onGeoError() {
  alert("Can't find u. No weather for u.");
}

// GeoOk position function(callback)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
