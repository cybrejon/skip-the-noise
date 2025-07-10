<script lang="ts">
  // import HeroSection from "@components/sections/HeroSection.svelte";
  import Placeholder from "@components/sections/Placeholder.svelte";
  import PlatformsMarquee from "@components/ui/PlatformsMarquee.svelte";
  import SiteHeader from "@components/ui/SiteHeader.svelte";
  import Switcheroo from "@components/ui/Switcheroo.svelte";
  import { ArrowRightIcon } from "lucide-svelte";

  let switcherooSamples: string[] = $state([
    "unnecessary calls",
    "lengthy decks",
    "crowded meetings",
    "empty promises",
    "wasted time",
  ]);
</script>

<SiteHeader />

<main class="isolate w-full overflow-x-clip">
  <!-- <HeroSection /> -->
  {@render HeroSection()}
  {@render ServicesSection()}
  <!-- {@render PlatformsSection()} -->
  {@render BrandsSection()}
  {@render TeamSection()}
  {@render BookendSection()}
  <!-- <Placeholder /> -->
</main>

{#snippet HeroSection()}
  <section id="hero" class="">
    <!-- Splash -->
    <div id="splash" class="h-svh sticky top-0" aria-hidden="true">
      <div class="container mx-auto h-full grid grid-cols-1 xl:grid-cols-2">
        <div class="flex justify-start items-center py-12 px-6">
          <div
            class="text-xxxl lg:text-jumbo leading-none font-extrabold font-manrope"
          >
            Skip the<br />
            <Switcheroo samples={switcherooSamples} />
          </div>
        </div>

        <div class="hidden xl:flex justify-center items-center">
          <div
            class="w-full bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-400">[Scroll Animation]</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Actual content -->
    <div
      id="hero-content"
      class="pt-30 pb-12 min-h-[80vh] sticky top-0 px-3 bg-white border-t border-neutral-100 shadow-[0px_-96px_240px_60px] shadow-white"
    >
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center">
          <hgroup class="flex flex-col justify-center items-center px-6 py-12">
            <h1 class="h2 text-center mb-[0.5em]">
              A Performance Digital Media agency founded by former WPP Media
              leads
            </h1>
            <p class="h5">
              We're cutting through the noise to deliver what matters: <span
                class="font-semibold text-primary-500">results</span
              >
            </p>
          </hgroup>

          <div
            id="ctas"
            class="w-full flex flex-col justify-center items-center"
          >
            <a
              href="/#"
              class="group text-white flex flex-row items-center justify-center gap-2 px-20 py-6 bg-primary-500 cursor-pointer"
              aria-label="Discover you platform score"
            >
              <span aria-hidden="true">Discover your Platform Score</span>
              <ArrowRightIcon
                class="group-hover:translate-x-2"
                size={20}
                aria-hidden
              />
            </a>

            <div class="flex flex-col justify-center items-center gap-3 p-6">
              <p>
                <a
                  href="/#"
                  class="link underline decoration-2 hover:text-primary-500"
                  >Claim your 2-week free trial</a
                >
              </p>
              <p>
                Wanna talk painpoints? <a
                  href="/#"
                  class="link underline decoration-2 hover:text-primary-500"
                  >Book a call</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/snippet}

{#snippet ServicesSection()}
  <section id="what-we-do" class="border-t border-neutral-100">
    <!-- Intro -->
    <div id="services-intro" class="py-30 sticky top-0">
      <div class="container mx-auto">
        <h2 class="h4 text-center px-6">What we do</h2>
      </div>
    </div>
    <!-- Services -->
    <div
      class="pt-20 bg-white sticky top-0 border-t border-neutral-100 shadow-[0px_-48px_120px_0px] shadow-white"
    >
      <div class="container mx-auto grid lg:grid-cols-3 gap-6 pb-20">
        <article class="card p-6">
          <h3 class="mb-3">Consultation</h3>
          <p>
            Get expert, on-demand advice and tailored strategies. Book as needed
            or choose ongoing support.
          </p>
        </article>
        <article class="card p-6">
          <h3 class="mb-3">Performance Marketing</h3>
          <p>
            Expand your reach beyond traditional platforms while maximizing end
            results.
          </p>
        </article>
        <article class="card p-6">
          <h3 class="mb-3">Auditing</h3>
          <p>
            Receive a clear, actionable analysis and checklist to boost ROAS and
            ad efficiency.
          </p>
        </article>
      </div>
      <!-- Platforms marquee -->
      <article
        id="platforms-we-work-with"
        class="h-60 border-t border-neutral-100 overflow-clip"
      >
        <PlatformsMarquee />
      </article>
    </div>
  </section>
{/snippet}

{#snippet BrandsSection()}
  <section id="featured-brands" class="border-t border-neutral-100">
    <!-- Intro -->
    <div id="brands-intro" class="py-30 sticky top-0">
      <div class="container mx-auto">
        <h2 class="h4 text-center px-6">Brands that found success with us</h2>
      </div>
    </div>
    <!-- Brands -->
    <div class="grid">
      <article
        class="tile sticky top-30 border-t border-neutral-100 bg-white shadow-[0px_-48px_120px_0px] shadow-white"
      >
        <div class="container mx-auto flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2">
            <h3 class="mb-[0.5em]">E-commerce</h3>
            <p>
              Turn browsers into buyers. We help brands grow sales by showing up
              at the right moment — with the right creative.
            </p>
          </hgroup>
          <div class="bg-neutral-50 h-60 lg:h-90 lg:flex-1/2"></div>
        </div>
      </article>

      <article class="tile sticky top-30 border-t border-neutral-100 bg-white">
        <div class="container mx-auto flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2">
            <h3 class="mb-[0.5em]">SaaS</h3>
            <p>
              Fill your funnel with qualified leads. From demos to downloads, we
              build paid social systems that drive pipeline.
            </p>
          </hgroup>
          <div class="bg-neutral-50 h-60 lg:h-90 lg:flex-1/2"></div>
        </div>
      </article>

      <article class="tile sticky top-30 border-t border-neutral-100 bg-white">
        <div class="container mx-auto flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2">
            <h3 class="mb-[0.5em]">Cybersecurity</h3>
            <p>
              Reach decision-makers before your competitors do. We target CISOs,
              CTOs, and IT buyers where they already spend time.
            </p>
          </hgroup>
          <div class="bg-neutral-50 h-60 lg:h-90 lg:flex-1/2"></div>
        </div>
      </article>
    </div>
  </section>
{/snippet}

{#snippet TeamSection()}
  <section id="team" class="border-t border-neutral-100">
    <!-- Intro -->
    <div id="team-intro" class="py-30 sticky top-0">
      <hgroup class="container mx-auto">
        <h2 class="h4 text-center px-6 mb-[0.25em]">Meet Team Noise-Free</h2>
        <p class="text-center">
          Two friends, united by a mission: skip the noise, deliver results, and
          have fun doing it.
        </p>
      </hgroup>
    </div>
    <!-- Headshots -->
    <div
      class="container mx-auto min-h-90 flex justify-center items-center py-20 sticky top-0 isolate"
    >
      <!-- Zoha -->
      <figure
        class="w-40 md:w-60 absolute -translate-x-[20vw] rotate-15 hover:z-10"
      >
        <!-- <img src="" alt="Photo of Zoha" class="" /> -->
        <div
          class="w-full aspect-square p-1 bg-white border border-neutral-200 rounded-2xl overflow-hidden"
        >
          <div class="w-full h-full bg-neutral-50 rounded-xl"></div>
        </div>
        <figcaption class="ps-3 opacity-50">Zoha</figcaption>
      </figure>
      <!-- Sonia -->
      <figure
        class="w-40 md:w-60 absolute translate-x-[20vw] -rotate-15 hover:z-10"
      >
        <!-- <img src="" alt="Photo of Sonia" class="" /> -->
        <div
          class="w-full aspect-square p-1 bg-white border border-neutral-200 rounded-2xl overflow-hidden"
        >
          <div class="w-full h-full bg-neutral-50 rounded-xl"></div>
        </div>
        <figcaption class="ps-3 opacity-50">Sonia</figcaption>
      </figure>
    </div>
    <!-- Details -->
    <div
      class="sticky top-0 border-t border-neutral-100 bg-white shadow-[0px_-48px_120px_0px] shadow-white"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-6 py-20">
        <article class="card p-6">
          <h3 class="mb-3">Zoha</h3>
          <p>Ex-WPP Director | Performance nerd</p>
          <p>Obsessed with ROAS + Reddit</p>
          <p>Loves cats and Apex Legends</p>
        </article>
        <article class="card p-6">
          <h3 class="mb-3">Sonia</h3>
          <p>Ex-WPP | Rogers &rarr; Coca-Cola</p>
          <p>Gemini, natural talker, always real</p>
          <p>Brings good vibes and even better ideas</p>
        </article>
      </div>
    </div>
  </section>
{/snippet}

{#snippet BookendSection()}
  <section id="bookend" class=" pt-24 bg-white border-t border-neutral-200">
    <div class="container mx-auto">
      <h6 class="text-jumbo text-center text-neutral-300 p-6">
        People work with people.<br />We make it feel like that again.
      </h6>

      <div
        class="flex justify-center items-center p-6 border-t border-neutral-200"
      >
        <small class=""
          >Copyright 2025 <span>&centerdot;</span> Skip the Noise Media</small
        >
      </div>
    </div>
  </section>
{/snippet}
