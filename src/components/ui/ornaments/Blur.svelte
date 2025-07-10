<script lang="ts">
  import blobs from '$lib/images/blobs.svg';
</script>

<div class="absolute inset-0">
  <div class="relative">
    <div class="h-full w-full relative bg-secondary-100/10">
      <img src={blobs} alt="header ornament"/>
      <div class="absolute inset-0 backdrop-blur-[200px]"></div>
    </div>
    <div class="grain-overlay absolute inset-0"></div>
  </div>
</div>

<style>
  .grain-overlay {
    background-image: url("$lib/images/grain.png");
  }
</style>