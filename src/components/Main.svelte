<script lang="ts">
  import Button from "./Button.svelte";
  import { useFahrenheit } from "../store";
  import Today from "./Today/index.svelte";
  import { fade } from "svelte/transition";
  import { data } from "../store";
  import { days, animations } from "../utils/constants";
  import DayCard from "./DayCard.svelte";

  enum Section {
    today,
    week,
  }

  let section = Boolean(localStorage.getItem("sectionToday"))
    ? Section.today
    : Section.week;

  $: section !== null &&
    localStorage.setItem("sectionToday", section === Section.today ? "1" : "");

  $: itemsData =
    section === Section.week
      ? $data.daily
      : (new Array(8)
          .fill("")
          .map((_, index) => $data.hourly[index * 3]) as any);

  const formatHourly = (timestamp: number) => {
    const date = new Date(timestamp);

    const hours24 = date.getHours();

    const hours = hours24 > 12 ? hours24 % 12 : hours24;
    const amOrPm = hours24 > 12 ? "PM" : "AM";

    return `${hours} ${amOrPm}`;
  };
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
      <a
        href="https://github.com/napthedev/rapid-weather.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button data-tooltips="View Github" style="width: 34px; height: 34px">
          <i style="font-size: 25px;" class="bx bxl-github" />
        </Button>
      </a>
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
  <div>
    <div transition:fade={{ duration: 200 }} class="container">
      {#each itemsData as item}
        <DayCard
          time={section === Section.week
            ? days[new Date(item.dt * 1000).getDay()]
            : formatHourly(item.dt * 1000)}
          min={section === Section.week ? item.temp.min : 0}
          max={section === Section.week ? item.temp.max : item.temp}
          animation={animations.find((animation) =>
            String(item.weather[0].id).startsWith(animation.id)
          ).url}
        />
      {/each}
    </div>
    <Today />
  </div>
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

  .container {
    gap: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 50px;
  }

  @media (max-width: 992px) {
    .container {
      padding: 0 20px;
    }
  }
</style>
