import { useEffect, useState } from 'react';
import { getWeatherData } from '../utilities/utils';

const useWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [mapCenter, setMapCenter] = useState([-1.286389, 36.817223]);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    try {
      const result = await getWeatherData(city);
      console.log('API Response:', result);
      setWeatherData(result);
      setError('');

      if(result && result.coord) {
        setMapCenter([result.coord.lat, result.coord.lon])
      }
    } catch (error) {
      setWeatherData(null);
      setError('Failed to fetch weather data.');
    }
  };


  useEffect(() => {
    fetchWeatherData();
  }, [city]);


  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };
  return {
    city,
    weatherData,
    error,
    handleInputChange,
    handleSubmit,
    mapCenter,
  };
};

export default useWeatherData;




