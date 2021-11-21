import type { WeatherResponseType } from "../utils/types";
import { getWeatherData } from "../utils/api";
import { writable } from "svelte/store";

export const location = writable({
  latitude: Number(localStorage.getItem("latitude")) || 21.0278,
  longitude: Number(localStorage.getItem("longitude")) || 105.8342,
});

export const data = writable<WeatherResponseType>();

location.subscribe(async (newState) => {
  localStorage.setItem("latitude", String(newState.latitude));
  localStorage.setItem("longitude", String(newState.longitude));
  data.set(await getWeatherData(newState.latitude, newState.longitude));
});
