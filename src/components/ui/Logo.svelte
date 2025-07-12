<script lang="ts">
  interface Props {
    scrolled?: boolean;
  }

  let { scrolled = $bindable(false) }: Props = $props();
</script>

<div
  class="{scrolled
    ? 'text-base'
    : 'text-lg'} leading-none tracking-tighter font-manrope font-extrabold pointer-events-none select-none"
>
  <span><span class="text-secondary-500">&lt;Skip</span>TheNoise</span><br /><span>media<span class="text-secondary-500">&gt;</span></span>
</div>
