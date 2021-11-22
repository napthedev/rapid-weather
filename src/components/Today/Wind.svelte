<script lang="ts">
  import Counter from "../Counter.svelte";

  export let speed;
  export let direction;
</script>

<div class="container">
  <p>Wind Status</p>
  <p>
    <span style="font-size: 50px;"
      ><Counter value={speed} changePerTime={0.3} time={1000} />
    </span>
    <span>m/s</span>
  </p>

  <div class="direction">
    <img
      style={`transform: rotate(${direction}deg)`}
      src="/today/direction.png"
      alt=""
    />
    <Counter value={direction} changePerTime={0.3} time={1000} />deg
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

  .direction {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .direction img {
    width: 30px;
    height: 30px;
    border: 1px solid #e7e7e7;
    border-radius: 50%;
    padding: 4px;
  }
</style>
