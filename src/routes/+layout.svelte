<script lang="ts">
  import "@fontsource-variable/inter";
  import "@fontsource-variable/manrope";
  import "../app.css";

  interface Props {
    children: import("svelte").Snippet;
  }

  export const ssr = false;

  let { children }: Props = $props();
</script>

<svelte:head>
	<title>Skip the Noise</title>
	<meta name="description" content="Skip the Noise Media - Cutting through the noise to deliver nothing but results." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
</svelte:head>

{@render children()}
