<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import Button from "./Button.svelte";

  export let animation;
  export let temperature;
  export let title;
  export let description;
  export let icon;
  export let image;
  export let name;
</script>

<div class="container">
  <div class="actions">
    <p class="name">{name}</p>
    <div style="display: flex; align-items: center; gap: 5px">
      <Button
        ><i style="font-size: 25px;" class="bx bx-current-location" /></Button
      >
      <Button><i style="font-size: 25px;" class="bx bx-reset" /></Button>
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
