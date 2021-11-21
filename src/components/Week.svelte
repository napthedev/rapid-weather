<script lang="ts">
  import { fade } from "svelte/transition";
  import { data } from "../store";
  import { days, animations } from "../utils/constants";
  import DayCard from "./DayCard.svelte";
</script>

<div transition:fade={{ duration: 200 }} class="container">
  {#each $data.daily as day}
    <DayCard
      day={days[new Date(day.dt * 1000).getDay()]}
      min={day.temp.min}
      max={day.temp.max}
      animation={animations.find((animation) =>
        String(day.weather[0].id).startsWith(animation.id)
      ).url}
    />
  {/each}
</div>

<style>
  .container {
    gap: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 50px;
  }

  @media (max-width: 992px) {
    .container {
      padding: 0 20px;
    }
  }
</style>
