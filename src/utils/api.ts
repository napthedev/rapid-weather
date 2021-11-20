import type { WeatherResponseType } from "./types";
import axios from "axios";

export const getWeatherData = async (
  latitude: number,
  longitude: number
): Promise<WeatherResponseType> => {
  const data = (
    await axios.get("https://api.openweathermap.org/data/2.5/onecall", {
      params: {
        lon: longitude,
        lat: latitude,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    })
  ).data;

  const geoLocation = await getLocationName(latitude, longitude);

  return { ...data, name: geoLocation };
};

export const getLocationName = async (latitude: number, longitude: number) => {
  const data = (
    await axios.get("http://api.openweathermap.org/geo/1.0/reverse", {
      params: {
        lon: longitude,
        lat: latitude,
        limit: 1,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
      },
    })
  ).data;

  return data[0]?.name || "";
};
