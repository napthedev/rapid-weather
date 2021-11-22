<script>
  import { onMount } from "svelte";

  export let value,
    time,
    changePerTime,
    fixed = 1;

  let result = 0;

  onMount(() => {
    const myInterval = setInterval(() => {
      if (result < value - changePerTime) {
        result += changePerTime;
      } else if (result < value) {
        result = value;
      } else if (result >= value) {
        clearInterval(myInterval);
      }
    }, time / (value / changePerTime));
  });
</script>

<slot>{result === Math.round(result) ? result : result.toFixed(fixed)}</slot>
