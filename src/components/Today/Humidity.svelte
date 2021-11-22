<script lang="ts">
  import Counter from "../Counter.svelte";

  export let percentage;
</script>

<div class="container">
  <p>Humidity</p>
  <p>
    <span style="font-size: 50px;"
      ><Counter value={percentage} changePerTime={0.3} time={1000} />
    </span>
    <span>%</span>
  </p>

  <div class="more-info">
    <img src="/today/humidity.png" alt="" />
    <p>
      {percentage < 30 ? "Very Dry" : percentage < 70 ? "Normal" : "Very Wet"}
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
