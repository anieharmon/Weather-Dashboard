function initPage() {
  const cityEl = document.getElementById("enter-city");
  const searchEl = document.getElementById("search-button");
  const clearEl = document.getElementById("clear-history");
  const nameEl = document.getElementById("city-name");
  const currentPicEl = document.getElementById("current-pic");
  const currentTempEl = document.getElementById("temperature");
  const currentHumidityEl = document.getElementById("humidity");
  const currentWindEl = document.getElementById("wind-speed");
  const currentUVEl = document.getElementById("UV-index");
  const historyEl = document.getElementById("history");
  var fivedayEl = document.getElementById("fiveday-header");
  var todayweatherEl = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
}


  const APIKey = "84b79da5e5d7c92085660485702f4ce8";


  function getWeather(cityName) {
    // Execute a current weather get request from open weather api
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL)


      var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

      fetch(weatherURL)
        .then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data);
          console.log(data.main.humidity);
          console.log(`humidity:${data.main.humidity}%`);
          document.querySelector("#humidity").textContent = `humidity:${data.main.humidity}%`;
          console.log(data.wind.speed);
          console.log(`wind speed:${data.wind.speed}mph`);
          document.querySelector("#wind-speed").textContent = `wind speed:${data.wind.speed}mph`;
          console.log(data.main.temp);
          console.log(`temp:${data.main.temp}F`);
          document.querySelector("#temp").textContent = `temp:${data.main.temp}F`;
          console.log(data.weather[0].icon);
          var weatherIcon = data.weather[0].icon;
          var iconURL = `http://openweathermap.org/img/w/${weatherIcon}.png`;
          var weatherImage = document.createElement("img");
          weatherImage.setAttribute("src", iconURL);
          document.querySelector("#icon").appendChild(weatherImage);
        });
    }
    );
}


document.querySelector("#search-button").addEventListener("click", function (event) {
  event.preventDefault();
  var cityname = document.querySelector("#city-input").value;
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},&limit=${5}&appid=${APIkey}`;
  getApi(requestUrl);
});

//get data on the page



//loop through the data 5 day weather

//display last searched city and you need to know the last city searched
//need to save the last city searched in local storage
//save the city name only in local storage and pass the city name