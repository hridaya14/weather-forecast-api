import { atom, selector } from "recoil";
import axios from "axios";

export const locationState = atom({
  key: "Location",
  default: "Delhi,IN",
});

export const locationKeyState = selector({
  key: "LocationKeyState",
  get: async ({ get }) => {
    const location = get(locationState);
    try {
      const data = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=kE64PGABovUaFDsmKKnDAfbyY1mcZoO9&q=${location}`
      );
      if (data[0]) {
        return data[0].Key;
      }
    } catch (error) {
      console.log("Error fetching key", error);
      return null;
    }
  },
});

export const currentWeatherState = selector({
  key: "CurrentWeatherState",
  get: async ({ get }) => {
    const location = get(locationState);
    try {
      const response = await axios.get(
        `http://localhost:3000/current?query=${location}`
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
        const response = await axios.get(`http://localhost:3000/forecast?query=${location}`);
        const data = response.data;
        return data;
     } catch (error) {
       console.log('Error fetching current weather:', error);
       return {};
     }
   }
 });


export const getWeatherIconPath = (condition) => {
switch (condition.toLowerCase()) {
  case 'snow':
    return '/snow.png';
  case 'rain':
    return '/rain.png';
  case 'fog':
    return '/fog.png';
  case 'wind':
    return '/wind.png';
  case 'cloudy':
    return '/cloudy.png';
  case 'partly-cloudy-day':
    return '/partly-cloudy-day.png';
  case 'partly-cloudy-night':
    return '/partly-cloudy-night.png';
  case 'clear-day':
    return '/clear-day.png';
  case 'clear-night':
    return '/clear-night.png';
  default:
    return '/default.png';
}
};
