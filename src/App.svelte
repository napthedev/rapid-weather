<script lang="ts">
  import Dashboard from "./components/Dashboard.svelte";
  import Loading from "./components/Loading.svelte";

  import { data } from "./store";
</script>

{#if $data && typeof $data !== "undefined"}
  <Dashboard />
{:else}
  <Loading />
{/if}

<style global>
  body {
    background: #fff;
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  [data-tooltips] {
    position: relative;
  }

  [data-tooltips]::after {
    content: attr(data-tooltips);
    position: absolute;
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    background: #222;
    color: #fff;
    white-space: nowrap;
    width: max-content;
    padding: 5px 7px;
    font-size: 15px;
    border-radius: 5px;
    pointer-events: none;

    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  [data-tooltips]:hover::after {
    top: calc(100% + 10px);
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    body {
      overflow-y: auto;
    }
  }
</style>
