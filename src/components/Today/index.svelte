<script lang="ts">
  import UV from "./UV.svelte";

  import { data } from "../../store";
</script>

<div class="container">
  <div class="item">
    <UV value={$data.current.uvi} />
  </div>
  <div class="item" />
  <div class="item" />
  <div class="item" />
  <div class="item" />
  <div class="item" />
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
  }

  @media (max-width: 992px) {
    .container {
      padding: 20px;
    }
  }
</style>
