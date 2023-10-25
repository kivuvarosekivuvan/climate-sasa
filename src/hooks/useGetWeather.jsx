import { useEffect, useState } from 'react';
import { getWeatherData } from '../utilities/utils';

const useWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [mapCenter, setMapCenter] = useState([-1.286389, 36.817223]);

  const fetchWeatherData = async (cityName) => {
    try {
      const result = await getWeatherData(cityName);
      console.log(result)
      setWeatherData(result);
      setError('');

      if (result && result.coord) {
        const { lat, lon } = result.coord;
        setMapCenter([lat, lon]);
      }
    } catch (error) {
      setWeatherData(null);
      setError('Failed to fetch weather data.');
    }
  };

  useEffect(() => {
    const defaultCity = 'nairobi';
    fetchWeatherData(defaultCity);
  }, []);

  useEffect(() => {
    if (city !== '') {
      fetchWeatherData(city);
    }
  }, [city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city !== '') {
      fetchWeatherData(city);
    }
  };

  return { city, weatherData, error, handleInputChange, handleSubmit, mapCenter, setMapCenter };
};

export default useWeatherData;