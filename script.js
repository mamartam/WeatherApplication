const apiKey = "a01ba5c785bd0d162442f55c4dc4ad4f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

// import Clouds from ".img/clouds.img";
// import Clear from ".img/clear.img";
// import Rain from ".img/rain.img";
// import Drizzle from ".img/drizzle.img";
// import Mist from ".img/mist.img";

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";

        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";

        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";

        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }



}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
