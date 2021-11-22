<script lang="ts">
  import { slide } from "svelte/transition";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { celsiusToFahrenheit } from "../utils/convertDegree";
  import { useFahrenheit } from "../store";

  export let time;
  export let animation;
  export let min;
  export let max;
</script>

<div class="card">
  {#key time}
    <p transition:slide={{ duration: 300 }}>{time}</p>
  {/key}
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
  {#key `${$useFahrenheit} ${min} ${max}`}
    <div class="temp" transition:slide={{ duration: 300 }}>
      {#if min}
        <p class="min">
          {$useFahrenheit
            ? Math.round(celsiusToFahrenheit(min))
            : Math.round(min)}º
        </p>
      {/if}
      <p class="max">
        {$useFahrenheit
          ? Math.round(celsiusToFahrenheit(max))
          : Math.round(max)}º
      </p>
    </div>
  {/key}
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
