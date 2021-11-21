<script lang="ts">
  import { blur } from "svelte/transition";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div
  style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh;"
  out:blur={{ duration: 400 }}
>
  <LottiePlayer
    src="/lottie/loading.json"
    autoplay
    loop
    renderer="svg"
    background="transparent"
    controls={false}
    controlsLayout={[]}
    width={300}
    height={300}
  />
</div>
