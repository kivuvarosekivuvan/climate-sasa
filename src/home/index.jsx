import React, { useEffect } from 'react';
import './style.css';
import Map from '../atom/map';
import { TiWeatherCloudy,TiWeatherSunny, TiWeatherShower, TiThermometer,TiWeatherSnow, TiArrowForwardOutline } from 'react-icons/ti';
import useWeatherData from '../hooks/useGetWeather';

const Home = () => {
  const { city, weatherData, error, handleInputChange, handleSubmit, mapCenter, setMapCenter } = useWeatherData();

  useEffect(() => {
    if (weatherData && weatherData.coord) {
      setMapCenter([weatherData.coord.lat, weatherData.coord.lon]);
    }
  }, [weatherData, setMapCenter]);


  // const getWeatherIcon = (weatherCode) => {
  //   switch (weatherCode) {
  //     case 'Clouds':
  //       return <TiWeatherCloudy style={{ color: 'gray', fontSize: '150px', marginLeft:'80px' }} />;
  //     case 'Clear':
  //       return <TiWeatherSunny style={{ color: 'yellow', fontSize: '150px' }} />;
  //     case 'Rain':
  //       return <TiWeatherShower style={{ color: 'rgb(0, 162, 255)', fontSize: '150px' }} />;
  //     case 'Snow':
  //       return <TiWeatherSnow style={{ color: 'white', fontSize: '150px' }} />;
  //     default:
  //       return null;
  //   }
  // };



  const getWeatherIcon = (weatherCode) => {
    const isSmallScreen = window.innerWidth <= 768;
  
    switch (weatherCode) {
      case 'Clouds':
        return (
          <TiWeatherCloudy
            style={{
              color: 'gray',
              fontSize: isSmallScreen ? '50px' : '150px',
              marginLeft: isSmallScreen ? '90px' : '80px',
              marginTop:isSmallScreen? '20px':'',
            }}
          />
        );
      case 'Clear':
        return (
          <TiWeatherSunny
            style={{
              color: 'yellow',
              fontSize: isSmallScreen ? '50px' : '150px',
              marginLeft: isSmallScreen ? '90px' : '80px',
              marginTop:isSmallScreen? '20px':'',            }}
          />
        );
      case 'Rain':
        return (
          <TiWeatherShower
            style={{
              color: 'rgb(0, 162, 255)',
              fontSize: isSmallScreen ? '50px' : '150px',
              marginLeft: isSmallScreen ? '90px' : '80px',
              marginTop:isSmallScreen? '20px':'',            }}
          />
        );
      case 'Snow':
        return (
          <TiWeatherSnow
            style={{
              color: 'white',
              fontSize: isSmallScreen ? '50px' : '150px',
              marginLeft: isSmallScreen ? '90px' : '80px',
              marginTop:isSmallScreen? '20px':'',            }}
          />
        );
      default:
        return null;
    }
  };
  const WeatherData = () => {
    if (error) {
      return <p className="error-message">{error}</p>;
    }

    if (weatherData && weatherData.main && weatherData.main.temp) {
      const temperature = (weatherData.main.temp - 273.15).toFixed(1);      const humidity = weatherData.main.humidity;

      return (
        <div className="weather-data">
          <div className='cityname'>
            <p id="city">City:</p>
            <p className="weather-value1">{weatherData.name}</p>
          </div>
          <div className="weather-info">
            <div className="weather-item">
              <p className="weather-label"><TiThermometer />Temperature</p>
              <p className="weather-value">{temperature}°C</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiWeatherShower />Humidity</p>
              <p className="weather-value">{humidity}%</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiWeatherCloudy /> Weather</p>
              <p className="weather-info-value">{weatherData.weather[0].description}</p>
            </div>
            <div className="weather-item">
              <p className="weather-label"><TiArrowForwardOutline />Wind Speed</p>
              <p className="weather-value">{weatherData.wind.speed} m/s</p>
            </div>
            <div className="weather-icon">
                {getWeatherIcon(weatherData.weather[0].main)}
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

        </form>
      </div>
      {weatherData && (
  <Map
    mapCenter={mapCenter}
    temperature={(weatherData.main.temp - 273.15).toFixed(1)}
    humidity={weatherData.main.humidity}
  />
)}      {WeatherData()}
    </div>
  );
};

export default Home;