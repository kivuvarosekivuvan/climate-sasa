import React from 'react';
import './style.css';
import Map from '../atom/map';
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherShower, TiWeatherSnow, TiThermometer, TiWeatherRain, TiArrowForwardOutline } from 'react-icons/ti';
import useWeatherData from '../hooks/useGetWeather';

const Home = () => {
  const { city, weatherData, error, handleInputChange, handleSubmit, mapCenter } = useWeatherData();

  const WeatherData = () => {
    if (error) {
      return <p className="error-message">{error}</p>;
    }
  
    if (weatherData && weatherData.main && weatherData.main.temp) {
      return (
        <div className="weather-data">
         <div className='cityname'>
                <p id="city">City:</p>
                <p className="weather-value1">{weatherData.name}</p>
              </div>
              <div className="weather-info">
            <div className="weather-item">
              <p className="weather-label"><TiThermometer/>Temperature</p>
              <p className="weather-value">{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiWeatherShower/>Humidity</p>
              <p className="weather-value">{weatherData.main.humidity}%</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiWeatherCloudy /> Weather</p>
              <p className="weather-info-value">{weatherData.weather[0].description}</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiArrowForwardOutline />Wind Speed</p>
              <p className="weather-value">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div>
      <h1>ClimateSasa</h1>
      <div className="form">
        <form onSubmit={handleSubmit} className="search">
          <input
            className={`input ${city === 'Nairobi' ? 'default-city' : ''}`}
            type="text"
            placeholder="Enter a city name..."
            value={city}
            onChange={handleInputChange}
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
      {weatherData && <Map mapCenter={mapCenter} />}
     
      {WeatherData()}
    </div>
  );
};

export default Home;