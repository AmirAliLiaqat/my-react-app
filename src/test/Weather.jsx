import { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE"; // replace with your OpenWeather API key

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      setError("");
      setWeather(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod === "404") {
        setError("City not found");
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />

      <button onClick={getWeather} style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
