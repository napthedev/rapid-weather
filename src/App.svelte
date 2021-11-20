<script lang="ts">
  import Dashboard from "./components/Dashboard.svelte";
  import { getWeatherData } from "./utils/api";

  let latitude = 21.0278;
  let longitude = 105.8342;

  let data;

  let loading = true;

  $: `${longitude} ${latitude}` &&
    (async () => {
      data = await getWeatherData(latitude, longitude);

      loading = false;
    })();
</script>

{#if loading}
  <h1>Loading</h1>
{:else}
  <Dashboard {data} />
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  :global(body) {
    background: #e6e5e5;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
</style>
