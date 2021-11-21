<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import Button from "./Button.svelte";
  import { location, data } from "../store";
  import { animations } from "../utils/constants";

  let animation = animations.find((animation) =>
    String($data?.current.weather[0].id).startsWith(animation.id)
  )?.url;
  let temperature = Math.round($data?.current.temp);
  let title = $data?.current.weather[0].main;
  let description = $data?.current.weather[0].description;
  let icon = `http://openweathermap.org/img/wn/${$data?.current.weather[0].icon}@2x.png`;
  let image = animations.find((animation) =>
    String($data?.current.weather[0].id).startsWith(animation.id)
  )?.image;
  let name = $data?.name;

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
    <p class="name">{name}</p>
    <div style="display: flex; align-items: center; gap: 5px">
      <Button on:click={useCurrentLocation} data-tooltips="Current location"
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
      width={200}
      height={200}
    />
  </div>
  <p class="temperature">{temperature}<sup>ºC</sup></p>
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
    width: 300px;
    padding: 30px 50px;
    flex-shrink: 0;
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
    height: 100px;
    object-fit: cover;
    border-radius: 20px;
  }
</style>
