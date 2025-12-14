const statusText = document.getElementById("status");
const weatherBox = document.getElementById("weatherBox");
const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", () => location.reload());

function getWeather(lat, lon) {
  const apiUrl = `https://wttr.in/${lat},${lon}?format=j1`; // Public API

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const area = data.nearest_area[0].areaName[0].value;
      const tempC = data.current_condition[0].temp_C;
      const desc = data.current_condition[0].weatherDesc[0].value;

      statusText.textContent = `📍 Location: ${area}`;
      weatherBox.innerHTML = `
        🌡️ Temperature: ${tempC}°C <br>
        ☁️ Condition: ${desc}
      `;
    })
    .catch(() => {
      weatherBox.textContent = "❌ Unable to fetch weather data.";
    });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        statusText.textContent = "✅ Location detected!";
        getWeather(lat, lon);
      },
      () => {
        statusText.textContent = "⚠️ Location access denied. Please allow it.";
        weatherBox.textContent = "Unable to detect location.";
      }
    );
  } else {
    statusText.textContent = "❌ Geolocation not supported in this browser.";
  }
}

getLocation();
