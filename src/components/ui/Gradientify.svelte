
<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<span
class="pr-2 -mr-2 -ml-1"
	style="background: var(--gradient-yellow-red); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
>
	{@render children()}
</span>

<style>
	span {
		display: inline-block;
	}
</style>