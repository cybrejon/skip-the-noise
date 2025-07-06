<script lang="ts">

  type Variant = 'primary' | 'normal' | 'symbol';

  let { variant = 'primary' } = $props<{ variant?: Variant }>()
</script>

{#if variant === 'primary'}
<h1><span>Skip The Noise</span><br />Media</h1>
{/if}

{#if variant === 'normal'}
  <p><span>Skip The Noise</span><br />Media</p>
{/if}

{#if variant === 'symbol'}
  <!-- a glyph of the branding here instead of text, going to propose them a brand guideline after this project lol -->
  <p><span>Skip The Noise</span><br />Media</p>
{/if}