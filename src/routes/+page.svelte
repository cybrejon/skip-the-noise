<script lang="ts">
  import PlatformsMarquee from "@components/ui/PlatformsMarquee.svelte";
  import SiteHeader from "@components/ui/SiteHeader.svelte";
  import Switcheroo from "@components/ui/Switcheroo.svelte";
  import { ArrowRightIcon } from "lucide-svelte";
  import grid_background from "$lib/images/grid.svg";
  import Icon from "@iconify/svelte";
  import OrnamentCursor from "$lib/images/cursor.svg.svelte";
  import Gradientify from "@components/ui/Gradientify.svelte";
  import { useIntersectionObserver } from "$lib/scripts/hooks.svelte";
  import { onMount } from "svelte";

  let switcherooSamples: string[] = $state([
    "unnecessary calls",
    "lengthy decks",
    "crowded meetings",
    "empty promises",
    "wasted time",
  ]);
  let serviceCardsObserver = useIntersectionObserver({ threshold: 0.5 });
  let teamHeadshotsObserver = useIntersectionObserver({ threshold: 0.5 });

  let heroSectionObserver = useIntersectionObserver({ threshold: 0.5 });

  onMount(() => {
    serviceCardsObserver.once = true;
  });
</script>

<SiteHeader />

<main class="isolate w-full overflow-x-clip">
  {@render HeroSection()}
  {@render ServicesSection()}
  {@render BrandsSection()}
  {@render TeamSection()}
  {@render BookendSection()}
</main>

{#snippet HeroSection()}
  <section id="hero">
    <!-- Splash -->
    <div
      id="splash"
      class="h-svh sticky top-0"
      aria-hidden="true"
      style={`background-image: url(${grid_background}); background-size: cover;`}
    >
      <div class="container mx-auto h-full grid grid-cols-1 xl:grid-cols-2">
        <div class="flex justify-start items-center py-12 px-6 drop">
          <div
            class="text-xxxl lg:text-jumbo leading-none font-extrabold font-manrope"
          >
            <span class="tracking-tighter">Skip the</span><br />
            <Switcheroo samples={switcherooSamples} />
          </div>
        </div>

        <div class="hidden xl:flex justify-center items-center">
          <!-- <div
            class="w-full bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-400">[Scroll Animation]</span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- Actual content -->
    <div
      bind:this={heroSectionObserver.ref}
      id="hero-content"
      style={`background-image: url(${grid_background}); background-size: cover; background-attachment: fixed;`}
      class={`py-20 min-h-[80vh] sticky top-0 border-t-2 border-deep-indigo border-dashed shadow-[0px_-96px_240px_60px] shadow-white ${heroSectionObserver.intersecting ? 'bg-primary-400' : 'bg-white'}`}
    >
      <div
        class="container mx-auto border-2 border-deep-indigo rounded-xl bg-primary-500 drop-shadow-brutal-card bg-bottom bg-cover overflow-hidden"
        style="background-image: url('/src/lib/images/bg_performance.svg');"
      >
        <div class="p-2 md:p-4 flex border-b-2 bg-deep-indigo">
          <div class="flex gap-2 md:gap-3 items-center justify-center">
            {#each Array.from({ length: 3 }) as item}
              <span class="h-4 w-4 md:h-6 md:w-6 bg-secondary-500 border-2 border-primary-foreground rounded-full"
            ></span>
            {/each}
          </div>
        </div>
        <div
          class="flex px-3 py-12 md:py-24 flex-col justify-center items-center"
        >
          <hgroup class="flex flex-col justify-center items-center px-6 pb-16 text-primary-foreground">
            <h1 class="text-center mb-[0.5em] tracking-tight">
              A <span class="text-nowrap">
                <Gradientify>Perform<Icon icon='noto:trophy' style="display: inline-block; vertical-align: top;" />nce</Gradientify>
              </span> Digital Media agency founded by former WPP Media
              leads
            </h1>
            <p class="h5 text-center text-pretty">
              We're cutting through the noise to deliver what matters: <span
                class="font-semibold text-primary-foreground">RESULTS 💪</span
              >
            </p>
          </hgroup>

          <div
            id="ctas"
            class="w-full flex justify-center items-center gap-3"
          >
            <a
              href="/#"
              class="group text-white relative w-full sm:w-fit brutal-button bg-secondary-500 p-2 rounded-2xl cursor-pointer"
              aria-label="Discover you platform score"
            >
              <div
                class="flex flex-row items-center justify-center gap-2 p-4 sm:px-20 sm:py-6 border-2 rounded-lg border-secondary-100 border-dashed"
              >
                <span aria-hidden="true" class="text-shadow-brutal"
                  >Discover your Platform Score</span
                >
                <ArrowRightIcon
                  class="group-hover:translate-x-2"
                  size={20}
                  aria-hidden
                />
              </div>
              <OrnamentCursor
                class="absolute -bottom-6 -right-6 w-12 h-12 text-white"
              />
            </a>
            <a
              href="/#"
              class="group text-white relative w-full sm:w-fit brutal-button bg-primary-500 p-2 rounded-2xl cursor-pointer"
              aria-label="Discover you platform score"
            >
              <div
                class="flex flex-row items-center justify-center gap-2 p-4 sm:px-10 sm:py-6 rounded-lg"
              >
                <span aria-hidden="true" class="text-shadow-brutal"
                  >Claim your 2-week free trial</span
                >
              </div>
            </a>
            <a
              href="/#"
              class="group text-white relative w-full sm:w-fit brutal-button bg-primary-500 p-2 rounded-2xl cursor-pointer"
              aria-label="Discover you platform score"
            >
              <div
                class="flex flex-row items-center justify-center gap-2 p-4 sm:px-10 sm:py-6 rounded-lg"
              >
                <span aria-hidden="true" class="text-shadow-brutal"
                  >Book a call</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
{/snippet}

{#snippet ServicesSection()}
  <section id="what-we-do" class="border-t-2 border-deep-indigo border-dashed">
    <!-- Intro -->
    <div id="services-intro" class="py-30 sticky top-0">
      <div class="container mx-auto">
        <h2 class="h4 text-center px-6">What we do</h2>
      </div>
    </div>
    <!-- Services -->
    <div
      class="pt-20 bg-white sticky top-0 shadow-[0px_-48px_120px_0px] shadow-white"
    >
      <div
        class="service-cards container mx-auto grid lg:grid-cols-3 gap-6 pb-20 px-3 lg:px-0 isolate"
        class:observed={serviceCardsObserver.intersecting}
        bind:this={serviceCardsObserver.ref}
      >
        <article class="card">
          <h3 class="mb-3">Consultation</h3>
          <p>
            Get expert, on-demand advice and tailored strategies. Book as needed
            or choose ongoing support.
          </p>
        </article>
        <article class="card z-10">
          <h3 class="mb-3">Performance Marketing</h3>
          <p>
            Expand your reach beyond traditional platforms while maximizing end
            results.
          </p>
        </article>
        <article class="card">
          <h3 class="mb-3">Auditing</h3>
          <p>
            Receive a clear, actionable analysis and checklist to boost ROAS and
            ad efficiency.
          </p>
        </article>
      </div>
      <!-- Platforms marquee -->
      <article id="platforms-we-work-with" class="flex flex-col">
        <h4 class="h6 text-center opacity-50 select-none">
          Platforms we work with
        </h4>
        <PlatformsMarquee />
      </article>
    </div>
  </section>
{/snippet}

{#snippet BrandsSection()}
  <section
    id="featured-brands"
    class="border-t-2 border-deep-indigo border-dashed"
  >
    <!-- Intro -->
    <div id="brands-intro" class="py-30 sticky top-0">
      <div class="container mx-auto">
        <h2 class="h4 text-center px-6">Brands that found success with us</h2>
      </div>
    </div>
    <!-- Brands -->
    <div class="grid gap-12 pb-30 bg-white">
      <article
        class="tile h-[60svh] sticky top-30 shadow-[0px_-48px_120px_0px] shadow-white"
      >
        <div class="container mx-auto h-full flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2 bg-white">
            <h3 class="mb-[0.5em]">E-commerce</h3>
            <p>
              Turn browsers into buyers. We help brands grow sales by showing up
              at the right moment — with the right creative.
            </p>
          </hgroup>
          <div class="h-full lg:flex-1/2 px-3 lg:px-0">
            <div
              class="w-full h-full border-2 rounded-xl bg-primary-100 drop-shadow-brutal"
            ></div>
          </div>
        </div>
      </article>

      <article class="tile h-[60svh] sticky top-30">
        <div class="container mx-auto h-full flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2 bg-white">
            <h3 class="mb-[0.5em]">SaaS</h3>
            <p>
              Fill your funnel with qualified leads. From demos to downloads, we
              build paid social systems that drive pipeline.
            </p>
          </hgroup>
          <div class="h-full lg:flex-1/2 px-3 lg:px-0">
            <div
              class="w-full h-full border-2 rounded-xl bg-primary-100 drop-shadow-brutal"
            ></div>
          </div>
        </div>
      </article>

      <article class="tile h-[60svh] sticky top-30">
        <div class="container mx-auto h-full flex flex-col lg:flex-row">
          <hgroup class="px-6 py-15 lg:flex-1/2 bg-white">
            <h3 class="mb-[0.5em]">Cybersecurity</h3>
            <p>
              Reach decision-makers before your competitors do. We target CISOs,
              CTOs, and IT buyers where they already spend time.
            </p>
          </hgroup>
          <div class="h-full lg:flex-1/2 px-3 lg:px-0">
            <div
              class="w-full h-full border-2 rounded-xl bg-primary-100 drop-shadow-brutal"
            ></div>
          </div>
        </div>
      </article>
    </div>
  </section>
{/snippet}

{#snippet TeamSection()}
  <section id="team" class="border-t-2 border-deep-indigo border-dashed">
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
      class="headshots container mx-auto min-h-90 flex justify-center items-center pt-0 pb-20 sticky top-20 isolate"
      class:observed={teamHeadshotsObserver.intersecting}
      bind:this={teamHeadshotsObserver.ref}
    >
      <!-- Zoha -->
      <figure class="w-40 md:w-60 lg:w-80 absolute hover:z-10">
        <div
          class="w-full aspect-square p-1 bg-white border-2 border-deep-indigo rounded-2xl overflow-hidden"
        >
          <div class="w-full h-full bg-neutral-50 rounded-xl">
            <!-- <img src="" alt="Photo of Zoha" class="" /> -->
          </div>
        </div>
        <figcaption class="ps-3 opacity-50 text-start">Zoha</figcaption>
      </figure>
      <!-- Sonia -->
      <figure class="w-40 md:w-60 lg:w-80 absolute hover:z-10">
        <div
          class="w-full aspect-square p-1 bg-white border-2 border-deep-indigo rounded-2xl overflow-hidden"
        >
          <div class="w-full h-full bg-neutral-50 rounded-xl">
            <!-- <img src="" alt="Photo of Sonia" class="" /> -->
          </div>
        </div>
        <figcaption class="pe-3 opacity-50 text-end">Sonia</figcaption>
      </figure>
    </div>
    <!-- Details -->
    <div
      class="sticky top-0 px-3 bg-white shadow-[0px_-48px_120px_0px] shadow-white"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-6 py-20">
        <article class="card">
          <h3 class="mb-3">Zoha</h3>
          <p>Ex-WPP Director | Performance nerd</p>
          <p>Obsessed with ROAS + Reddit</p>
          <p>Loves cats and Apex Legends</p>
        </article>
        <article class="card">
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
  <section
    id="bookend"
    class=" pt-24 bg-white border-t-2 border-deep-indigo border-dashed"
  >
    <div class="container mx-auto">
      <h6 class="text-jumbo text-center text-neutral-300 p-6">
        People work with people.<br />We make it feel like that again.
      </h6>

      <div
        class="flex justify-center items-center p-6 border-t border-deep-indigo"
      >
        <small class=""
          >Copyright 2025 <span>&centerdot;</span> Skip the Noise Media</small
        >
      </div>
    </div>
  </section>
{/snippet}

<style>
  @media (width >= 64rem /* 1024px */) {
    div.service-cards {
      & > article {
        opacity: 0;
        /* transition: transform 1s cubic-bezier(0.16, 0.9, 0.38, 0.99); */
      }
      & > article:first-child {
        transform: translate(3.75rem, 3.75rem) /* 60px 60px */;
      }
      & > article:nth-child(2) {
        transform: translateY(0) /* 48px */;
      }
      & > article:last-child {
        transform: translate(-3.75rem, 3.75rem) /* -60px 60px */;
      }

      &.observed {
        & > article {
          opacity: 1;
          transition: transform 1s cubic-bezier(0.16, 0.9, 0.38, 0.99);
        }
        & > article:first-child {
          transform: translate(0, 0);
        }
        & > article:nth-child(2) {
          transform: translateY(-3rem) /* -48px */;
        }
        & > article:last-child {
          transform: translate(0, 0);
        }
      }
    }
  }

  div.headshots {
    & > figure {
      opacity: 0;
      user-select: none;
    }
    & > figure:first-child {
      rotate: 30deg;
      translate: -10vw 3.75rem /* 60px */;
    }
    & > figure:last-child {
      rotate: -30deg;
      translate: 10vw 3.75rem /* 60px */;
    }

    &.observed {
      & > figure {
        opacity: 1;
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.16, 0.9, 0.38, 0.99);
      }
      & > figure:first-child {
        rotate: 15deg;
        translate: -20vw 0;
        transition-delay: 100ms;
      }
      & > figure:last-child {
        rotate: -15deg;
        translate: 20vw 0;
        transition-delay: 300ms;
      }
    }
  }
</style>
