<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Main from "./Main.svelte";
  import { fade } from "svelte/transition";
</script>

<main in:fade={{ delay: 400, duration: 400 }}>
  <Sidebar />
  <Main />
</main>

<style>
  main {
    width: 100vw;
    min-height: 100vh;
    background: #fff;
    display: flex;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
    }
  }
</style>
