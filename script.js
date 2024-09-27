document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '0399de0cdcdd45df65bbb54e9c4eba91'; // Your API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    console.log("Fetching weather data for:", city); // Log city name

    fetch(url)
    .then(response => {
        console.log("API Response status:", response.status); // Log API response status
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        console.log("Weather data received:", data); // Log the data
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById('cityName').textContent = cityName;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('weatherInfo').style.display = 'block';
    })
    .catch(error => {
        console.error("Error fetching data:", error); // Log error
        alert("City not found, please try again.");
    });
});
