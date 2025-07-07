<script lang="ts">
  // type Variant = "primary" | "normal" | "symbol";

  interface Props {
    // variant?: Variant;
    scrolled?: boolean;
  }

  let { scrolled = $bindable(false) }: Props = $props();
</script>

<div
  class="{scrolled
    ? 'text-base'
    : 'text-lg'} leading-none tracking-tight font-manrope font-extrabold pointer-events-none select-none"
>
  <span>Skip The Noise</span><br /><span>Media</span>
</div>

<!-- {#if variant === "primary"}
  <p><span>Skip The Noise</span><br />Media</p>
{:else if variant === "normal"}
  <p><span>Skip The Noise</span><br />Media</p>
{:else if variant === "symbol"}
  <!- a glyph of the branding here instead of text, going to propose them a brand guideline after this project lol ->
  <p>STNM</p>
{/if} -->
