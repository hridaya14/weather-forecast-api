import { atom, selector } from "recoil";
import axios from "axios";


export const locationState = atom({
  key: "Location",
  default: "Delhi,IN",
});

export const menuState = atom({
  key: "Menu",
  default: false,
});



export const currentWeatherState = selector({
  key: "CurrentWeatherState",
  get: async ({ get }) => {
    const location = get(locationState);
    try {
      const response = await axios.get(
        `https://weather-forecast-api-production.up.railway.app/current?query=${location}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching current weather:", error);
      return {};
    }
  },
});

 export const forecastWeatherState = selector({
   key: 'ForecastWeatherState',
   get: async ({ get }) => {
     const location = get(locationState);
     try {
        const response = await axios.get(`https://weather-forecast-api-production.up.railway.app/forecast?query=${location}`);
        const data = response.data;
        return data;
     } catch (error) {
       console.log('Error fetching current weather:', error);
       return {};
     }
   }
 });


export const getWeatherIconPath = (condition) => {
switch (condition) {
  case 'snow':
    return '/icons/snow.png';
  case 'rain':
    return '/icons/rain.png';
  case 'fog':
    return '/icons/fog.png';
  case 'wind':
    return '/icons/wind.png';
  case 'cloudy':
    return '/icons/cloudy.png';
  case 'partly-cloudy-day':
    return '/icons/partly-cloudy-day.png';
  case 'partly-cloudy-night':
    return '/icons/partly-cloudy-night.png';
  case 'clear-day':
    return '/icons/clear-day.png';
  case 'clear-night':
    return '/icons/clear-night.png';
  default:
    return '/icons/default.png';
}
};
