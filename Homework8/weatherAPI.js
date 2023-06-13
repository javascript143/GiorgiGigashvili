async function resolveWeatherInfo() {
    let cityName = document.getElementById("cityName").value;

    let infoFromApi = await fetch(`https://geocode.maps.co/search?q=${cityName}`, {
        method: "GET"
    });

    let infoFromApiInJson = await infoFromApi.json();

    let latitute = infoFromApiInJson[0].lat;
    let longitude = infoFromApiInJson[0].lon;

    let weatherForCityResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: "GET"
    });

    let weatherForCityResponse1 = await weatherForCityResponse.json();

    result.innerHTML = `
<p> Temperature Of ${cityName} is ${weatherForCityResponse1.current_weather.temperature}</p>
<p> wind speed is ${weatherForCityResponse1.current_weather.windspeed} KM/H</p>`

if(weatherForCityResponse1.current_weather.windspeed < 20){
    result.innerHTML = `
<p> Temperature Of ${cityName} is ${weatherForCityResponse1.current_weather.temperature}</p>
<p> wind speed is ${weatherForCityResponse1.current_weather.windspeed} KM/H</p>`
document.body.style.background = "url(/Lowwind.mp4)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.zIndex = "-1";
}else if (weatherForCityResponse1.current_weather.windspeed > 20 && weatherForCityResponse1.current_weather.windspeed < 40){
    result.innerHTML = `
<p> Temperature Of ${cityName} is ${weatherForCityResponse1.current_weather.temperature}</p>
<p> wind speed is ${weatherForCityResponse1.current_weather.windspeed} KM/H</p>`
document.body.style.background = "url(/Midwind.mp4)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.zIndex = "-1";
}else if (weatherForCityResponse1.current_weather.windspeed > 40){
    result.innerHTML = `
<p> Temperature Of ${cityName} is ${weatherForCityResponse1.current_weather.temperature}</p>
<p> wind speed is ${weatherForCityResponse1.current_weather.windspeed} KM/H</p>`
document.body.style.background = "url(/Highwind.mp4)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.zIndex = "-1";
}

}