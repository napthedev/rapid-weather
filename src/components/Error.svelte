<script lang="ts">
  import { fade } from "svelte/transition";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div
  style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: 100vh;"
  in:fade={{ duration: 400 }}
>
  <LottiePlayer
    src="/lottie/error.json"
    autoplay
    loop
    renderer="svg"
    background="transparent"
    controls={false}
    controlsLayout={[]}
    width={300}
    height={300}
  />

  <h1>Something went wrong</h1>
</div>
