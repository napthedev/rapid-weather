<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Main from "./Main.svelte";
</script>

<div>
  <main>
    <Sidebar />
    <Main />
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
    max-width: 1100px;
    height: 600px;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
  }
</style>
