<script lang="ts">
  import Counter from "../Counter.svelte";

  export let value;
</script>

<div class="container">
  <p>Air Pressure</p>
  <p>
    <span style="font-size: 50px;"
      ><Counter {value} changePerTime={10} time={1000} />
    </span>
    <span>hPa</span>
  </p>

  <div class="more-info">
    <img src="/today/pressure.png" alt="" />
    <p>
      {value < 900 ? "Low pressure" : value < 1100 ? "Normal" : "High pressure"}
    </p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .more-info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .more-info img {
    width: 30px;
    height: 30px;
    border: 1px solid #e7e7e7;
    border-radius: 50%;
    padding: 4px;
  }
</style>
