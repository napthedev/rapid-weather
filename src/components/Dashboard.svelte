<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Main from "./Main.svelte";
  import { fade } from "svelte/transition";
</script>

<div>
  <main in:fade={{ delay: 400, duration: 400 }}>
    <Sidebar />
    <Main />
  </main>
</div>

<style>
  main {
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
  }
</style>
