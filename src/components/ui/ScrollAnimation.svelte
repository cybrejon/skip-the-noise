<script lang="ts">
  import Cloud from "$lib/images/Cloud.svg.svelte";
  import Explosion from "$lib/images/Explosion.svg.svelte";
  import Flower from "$lib/images/Flower.svg.svelte";
  import Star from "$lib/images/Star.svg.svelte";
  import Switch from "$lib/images/Switch.svg.svelte";
  import Team from "$lib/images/Team.svg.svelte";
</script>


<div class="bg-gray-100 overflow-hidden h-full relative flex items-center justify-center">
  <div class="items-container h-0 w-0 border">

    <div class="item item-3 solid-shadow bobbing-4" style="--x: 80px; --y: -70px;">
      <Team />
    </div>

    <div class="item item-1 solid-shadow bobbing" style="--x: -120px; --y: -70px;">
      <Cloud />
    </div>

    <div class="item item-2 solid-shadow bobbing-2" style="--x: 40px; --y: 20px;">
      <Explosion />
    </div>

    <div class="item item-3 solid-shadow bobbing-3" style="--x: -160px; --y: -180px;">
      <Star />
    </div>

    <div class="item item-3 solid-shadow bobbing-3" style="--x: -180px; --y: 40px;">
      <Switch />
    </div>

    <div class="item item-3 solid-shadow bobbing-2" style="--x: -160px; --y: -100px;">
      <Flower />
    </div>

  </div>
</div>

<style>
  .items-container > * {
    position: absolute;
  }

  .item {
    transform: translate(var(--x), var(--y));
  }

  .bobbing {
    animation: bob 2.5s ease-in-out infinite;
  }

  .bobbing-2 {
    animation: bob-2 4.5s ease-in-out infinite;
  }

  .bobbing-3 {
    animation: bob 4.5s ease-in-out infinite;
  }

  .bobbing-4 {
    animation: bob-2 2.5s ease-in-out infinite;
  }

  @keyframes bob {
    0% { transform: translate(var(--x), calc(var(--y) + 0px)); }
    50% { transform: translate(var(--x), calc(var(--y) - 8px)); }
    100% { transform: translate(var(--x), calc(var(--y) + 0px)); }
  }

  @keyframes bob-2 {
    0% { transform: translate(var(--x), calc(var(--y) + 0px)); }
    30% { transform: translate(var(--x), calc(var(--y) - 6px)); }
    100% { transform: translate(var(--x), calc(var(--y) + 0px)); }
  }
</style>