
const API_KEY = "731a8f7ec2453dced0eb2b547f268251";

// Function to retrieve weather data from Open Weather Map API
function getWeather(city) {
  // Fetch weather data from Open Weather Map API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // Update the UI with the retrieved weather data
      document.getElementById("temperature").innerHTML = data.main.temp;
      document.getElementById("weather").innerHTML = data.weather[0].main;
      // ...
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

// When the page loads, get the weather for the default location (New York)
getWeather("Bern");

// Add event listeners for location input and refresh button
document.getElementById("location-form").addEventListener("submit", event => {
  event.preventDefault(); // prevent form submission
  // Get the location from the input field
  const city = document.getElementById("location-input").value;
  // Get the weather for the specified location
  getWeather(city);
});

document.getElementById("refresh-button").addEventListener("click", () => {
  // Get the current location from the UI
  const city = document.getElementById("location").innerHTML;
  // Get the weather for the specified location
  getWeather(city);
});
