const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '71fc4d1904da3a6ddebba3273d48d0fa';

export const getWeatherData = async (cityName) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch weather data.');
  }
};


