<script lang="ts">
  import Dashboard from "./components/Dashboard.svelte";

  import { data } from "./store";

  let loading = true;

  $: $data && (loading = false);
</script>

{#if loading}
  <div
    style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh;"
  >
    <h1>Loading</h1>
  </div>
{:else}
  <Dashboard />
{/if}

<style>
  :global(body) {
    background: #e6e5e5;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  :global([data-tooltips]) {
    position: relative;
  }

  :global([data-tooltips]::after) {
    content: attr(data-tooltips);
    position: absolute;
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    background: #222;
    color: #fff;
    white-space: nowrap;
    width: max-content;
    padding: 2px 5px;
    border-radius: 5px;
    z-index: 100;
    pointer-events: none;

    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  :global([data-tooltips]:hover::after) {
    top: calc(100% + 10px);
    opacity: 1;
    visibility: visible;
  }
</style>
