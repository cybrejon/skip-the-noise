<script lang="ts">
  import { ArrowUpIcon } from "lucide-svelte";

  interface Props {
    clicked: () => void;
  }
  let { clicked }: Props = $props();
  let showButton: boolean = $state(false);
</script>

<svelte:window
  onscroll={(ev) => {
    if (window.scrollY > 600) {
      showButton = true;
    } else {
      showButton = false;
    }
  }}
/>

<div
  class="fixed bottom-3 right-3
  {showButton
    ? 'opacity-100 pointer-events-auto visible'
    : 'opacity-0 pointer-events-none invisible'}"
>
  <button
    class="p-3 border-2 border-transparent rounded-full bg-white text-deep-indigo opacity-50 cursor-pointer
      hover:opacity-100 hover:border-deep-indigo focus:opacity-100 focus:border-deep-indigo"
    onclick={clicked}
  >
    <ArrowUpIcon />
  </button>
</div>
