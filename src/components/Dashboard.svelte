<script lang="ts">
  import { animations } from "../utils/constants";
  import type { WeatherResponseType } from "../utils/types";
  import Sidebar from "./Sidebar.svelte";

  export let data: WeatherResponseType;
</script>

<div>
  <main>
    <Sidebar
      animation={animations.find((animation) =>
        String(data.current.weather[0].id).startsWith(animation.id)
      ).url}
      temperature={Math.round(data.current.temp)}
      title={data.current.weather[0].main}
      description={data.current.weather[0].description}
      icon={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
      image={animations.find((animation) =>
        String(data.current.weather[0].id).startsWith(animation.id)
      ).image}
      name={data.name}
    />
  </main>
</div>

<style>
  div {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    width: 100%;
    max-width: 1000px;
    height: 600px;
    background: #fff;
    border-radius: 30px;
  }
</style>
