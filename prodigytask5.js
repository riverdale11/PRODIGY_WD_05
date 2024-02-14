function getWeather() {
    const apiKey = 'fcc8de7015bbb202209bbf0261babf4c';
    const locationInput = document.getElementById('location');
    const weatherInfo = document.getElementById('weather-info');

    const location = locationInput.value;

    if (!location) {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `<p>Current Temperature: ${temperature}°C</p>
                                    <p>Weather Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}

