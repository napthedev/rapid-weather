<script lang="ts">
  import Button from "./Button.svelte";
  import { useFahrenheit } from "../store";
  import Week from "./Week.svelte";
  import Today from "./Today/index.svelte";

  enum Section {
    today,
    week,
  }

  let section = Section.week;
</script>

<main>
  <div class="head">
    <div>
      <span
        on:click={() => (section = Section.today)}
        class={section === Section.today ? "selected-section" : ""}>Today</span
      >
      <span
        on:click={() => (section = Section.week)}
        class={section === Section.week ? "selected-section" : ""}>Week</span
      >
    </div>
    <div>
      <Button
        data-tooltips="Celsius"
        on:click={() => useFahrenheit.set(false)}
        style={`font-size: 17px; width: 30px; height: 30px; background: ${
          $useFahrenheit ? "#fff" : "#000"
        }; color: ${$useFahrenheit ? "#000" : "#fff"};`}>ºC</Button
      >
      <Button
        data-tooltips="Fahrenheit"
        on:click={() => useFahrenheit.set(true)}
        style={`font-size: 17px; width: 30px; height: 30px; background: ${
          !$useFahrenheit ? "#fff" : "#000"
        }; color: ${!$useFahrenheit ? "#000" : "#fff"};`}>ºF</Button
      >
    </div>
  </div>
  {#if section === Section.week}
    <Week />
  {/if}
  <Today />
</main>

<style>
  main {
    flex-grow: 1;
    background: #f6f6f8;
    height: 100vh;
    overflow-y: auto;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 35px;
  }

  .head > div {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .head span {
    color: #808080;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
  }

  .head span:hover {
    color: #5c5c5c;
  }

  .head span::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    transition: 0.2s;
    background: transparent;
  }

  .selected-section {
    color: #000 !important;
  }

  .selected-section::after {
    background: #000 !important;
  }

  @media (max-width: 768px) {
    main {
      height: auto;
    }
  }
</style>
