<script lang="ts">
  import HeroSection from '@components/sections/HeroSection.svelte';
  import Placeholder from '@components/sections/Placeholder.svelte';
  import SiteHeader from '@components/ui/SiteHeader.svelte';
</script>


<div>
  <SiteHeader />
  <main >
    <HeroSection />
    <Placeholder class="opacity-0 pointer-events-none" />
    <Placeholder class="bg-amber-200 sticky top-0" />
    <Placeholder class="bg-blue-200 sticky top-0" />
    <Placeholder class="bg-red-200 sticky top-0"/>

    <!-- whatever the last sticky covers will give
     us ample power to animate certain items until
     the next stickied element sticks -->

    <Placeholder />
  </main>
</div>
