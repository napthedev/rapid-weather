<script lang="ts">
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

  export let day;
  export let animation;
  export let min;
  export let max;
</script>

<div class="card">
  <p>{day}</p>
  <LottiePlayer
    src={animation}
    autoplay
    loop
    renderer="svg"
    background="transparent"
    controls={false}
    controlsLayout={[]}
    width={60}
    height={60}
    speed={2}
  />
  <div class="temp">
    <p class="min">{Math.round(min)}º</p>
    <p class="max">{Math.round(max)}º</p>
  </div>
</div>

<style>
  .card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    padding: 15px 0;
  }

  .temp {
    display: flex;
    gap: 4px;
  }

  .min {
    color: #a8a8a8;
  }

  .max {
    color: #000;
  }
</style>
