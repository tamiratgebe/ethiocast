const apiKey = "ef21aec4dea29adc9b2ab993a5dbfed4"; // You can get a free key from openweathermap.org

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = Math.round(data.main.temp);
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('wind').innerText = data.wind.speed;

        document.getElementById('weatherResult').classList.remove('hidden');
    } catch (error) {
        alert("Could not fetch weather data. Please check the city name.");
    }
}
