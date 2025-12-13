import { useState, useEffect } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");       // input
  const [searchCity, setSearchCity] = useState(""); // city to trigger useEffect
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    if (!searchCity) return;

    const fetchWeather = async () => {
      try {
        setError("");
        setWeather(null);

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();

        if (data.cod === "404") {
          setError("City not found");
        } else {
          setWeather(data);
        }
      } catch {
        setError("Something went wrong");
      }
    };

    fetchWeather();
  }, [searchCity]);

  const handleSearch = () => {
    if (!city.trim()) return;
    setSearchCity(city); // triggers useEffect
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
