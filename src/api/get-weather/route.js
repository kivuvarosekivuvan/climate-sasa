import { BASE_URL, API_KEY } from "../../../.config";

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch weather data.');
  }
};