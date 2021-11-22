<script lang="ts">
  import { slide } from "svelte/transition";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import Button from "./Button.svelte";
  import { location, data, useFahrenheit } from "../store";
  import { animations, days } from "../utils/constants";
  import { celsiusToFahrenheit } from "../utils/convertDegree";

  $: animation = animations.find((animation) =>
    String($data.current.weather[0].id).startsWith(animation.id)
  ).url;
  $: temperature = Math.round($data.current.temp);
  $: title = $data.current.weather[0].main;
  $: description = $data.current.weather[0].description;
  $: icon = `/weather/${$data.current.weather[0].icon}.png`;
  $: image = animations.find((animation) =>
    String($data.current.weather[0].id).startsWith(animation.id)
  ).image;
  $: name = $data.name;

  $: updatedDate = new Date($data.current.dt * 1000);
  $: updatedDateText = `${
    days[updatedDate.getDay()]
  }, ${updatedDate.getHours()}:${updatedDate.getMinutes()}`;

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.set({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  };
</script>

<div class="container">
  <div class="actions">
    <p class="name">{name || "Rapid Weather"}</p>
    <div style="display: flex; align-items: center; gap: 5px">
      <Button
        on:click={useCurrentLocation}
        data-tooltips="Your location"
        class="fix-tooltips"
        ><i style="font-size: 25px;" class="bx bx-current-location" /></Button
      >
    </div>
  </div>
  <div class="animation-container">
    <LottiePlayer
      src={animation}
      autoplay
      loop
      renderer="svg"
      background="transparent"
      controls={false}
      controlsLayout={[]}
      width={200}
      height={200}
      speed={2}
    />
  </div>
  <div style="height: 100px;">
    {#key $useFahrenheit}
      <p class="temperature" transition:slide={{ duration: 300 }}>
        {$useFahrenheit
          ? Math.round(celsiusToFahrenheit(temperature))
          : temperature}<sup>º{$useFahrenheit ? "F" : "C"}</sup>
      </p>
    {/key}
  </div>
  <p>{updatedDateText}</p>
  <div class="info">
    <img height="100" width="100" src={icon} alt="" />
    <div>
      <p>{title}</p>
      <p class="description">{description}</p>
    </div>
  </div>
  <img class="landscape-image" src={image} alt="" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 350px;
    padding: 30px 30px;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .name {
    font-size: 23px;
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .temperature {
    font-size: 60px;
    text-align: center;
  }

  .info {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .description {
    color: #777777;
  }

  .landscape-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 20px;
  }

  :global(.fix-tooltips::after) {
    left: auto !important;
    transform: none !important;
    right: -20px !important;
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      height: auto;
    }
  }
</style>
