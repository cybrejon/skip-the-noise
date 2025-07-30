<script lang="ts">
  import { quadOut } from "svelte/easing";
  import { fly, scale } from "svelte/transition";

  interface Props {
    samples: string[];
  }

  let { samples }: Props = $props();

  let sampleIndex: number = $state(0);
  let switcherooText: string = $derived(samples[sampleIndex]);

  $effect(() => {
    setInterval(() => {
      sampleIndex++;

      if (sampleIndex >= samples.length) {
        sampleIndex = 0;
      }
    }, 5000);
  });
</script>

<div class="h-30 sm:h-40 md:h-50 relative flex justify-center items-start">
  {#key switcherooText}
    <span
      class="text-secondary-500 absolute tracking-tighter"
      in:fly={{
        delay: 250,
        duration: 400,
        easing: quadOut,
        x: "15%",
        y: 0,
        opacity: 0,
      }}
      out:scale={{ duration: 400, easing: quadOut, start: 1.1, opacity: 0 }}
      >{switcherooText}</span
    >
  {/key}
</div>
