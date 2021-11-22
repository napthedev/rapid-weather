<script lang="ts">
  import UV from "./UV.svelte";
  import Wind from "./Wind.svelte";
  import Sun from "./Sun.svelte";
  import Humidity from "./Humidity.svelte";
  import Visibility from "./Visibility.svelte";
  import Pressure from "./Pressure.svelte";

  import { data } from "../../store";
</script>

<div class="container">
  <div class="item">
    <UV value={$data.daily[0].uvi} />
  </div>
  <div class="item">
    <Wind
      speed={$data.daily[0].wind_speed}
      direction={$data.daily[0].wind_deg}
    />
  </div>

  <div class="item">
    <Sun
      sunrise={$data.daily[0].sunrise * 1000}
      sunset={$data.daily[0].sunset * 1000}
    />
  </div>
  <div class="item">
    <Humidity percentage={$data.daily[0].humidity} />
  </div>
  <div class="item">
    <Visibility value={$data.current.visibility / 1000} />
  </div>
  <div class="item">
    <Pressure value={$data.daily[0].pressure} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 50px 0 50px;
    gap: 30px;
  }
  .item {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    width: 270px;
    height: 195px;
  }

  @media (max-width: 992px) {
    .container {
      padding: 20px;
    }
  }
</style>
