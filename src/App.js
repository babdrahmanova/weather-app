import React, { useState } from 'react';
import axios from 'axios';
import './styles/style.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const fetchWeatherData = () => {
    const API_KEY = 'e9189f8bcb20b3680cda1fe26a50440f';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios
      .get(API_URL)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  if (weatherData && weatherData.cod === 200) {
    return (
      <>
        <div className="app">
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter city" value={city} onChange={handleChange} />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="container">
            <div className="top">
              <div className="location">
                <p>{weatherData.name}</p>
              </div>
              <div className="temp">
                <h1>{weatherData.main.temp.toFixed()}°C</h1>
              </div>
              <div className="description">
                <p>{weatherData.weather[0].description}</p>
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className="bold">{weatherData.main.feels_like.toFixed()}°C</p>
                <p>Feels like</p>
              </div>
              <div className="humidity">
                <p className="bold">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p>
                <p>Wind speed</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="app">
      <div className="container">
      <div className="search">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter city" value={city} onChange={handleChange} />
              <button type="submit">Search</button>
            </form>
          </div>
        <h2>Access current weather data for any location on Earth including over 200,000 cities! </h2>;
      </div>
    </div>
  )
}

export default App;
