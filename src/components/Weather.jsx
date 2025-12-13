import { useState } from "react"

const apiKey = "6a4a873e9d21cf4f51eb1f87d0a33152";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

      const data = await res.json();

      setWeather(data);
    } catch (error) {
      console.log(error)
    }
  }

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

      <button onClick={handleSubmit} style={{ marginLeft: "10px", padding: "8px" }} className="btn btn-primary">
        Search
      </button>

      {weather && 
        <div className="border rounded mt-5">
          <p>Coord Lon: {weather?.coord?.lon}</p>
          <p>Corrd: {weather?.coord?.lat}</p>
          <p>Weather: {weather?.main?.temp}</p>
        </div>
      }
      
    </div>
  )
}

export default Weather
