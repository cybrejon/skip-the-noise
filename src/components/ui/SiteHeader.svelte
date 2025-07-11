<script lang="ts">
  import { ChevronDownIcon, WandSparklesIcon } from "lucide-svelte";
  import Logo from "./Logo.svelte";
  import OrnamentStar from "$lib/images/ornament_star.svg.svelte";

  let isScrolled: boolean = $state(false);
  let isMobileNavOpen: boolean = $state(false);

  const NavLinks = [
    {
      label: "🧠 services",
      url: "/#",
    },
    {
      label: "💡 about",
      url: "/#",
    },
  ];
</script>

<svelte:window
  onscroll={() => {
    if (window.scrollY > 10) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  }}
/>

<header
  class="fixed inset-x-0 top-0 z-20 flex flex-col px-3 border-b-2 {isScrolled ||
  isMobileNavOpen
    ? 'bg-light-grey border-neutral-700'
    : 'bg-transparent border-transparent'}"
>
  <div
    class="container mx-auto flex justify-between items-center gap-3 {isScrolled
      ? 'py-3'
      : 'py-6 px-6'}"
  >
    <a href="/">
      <Logo scrolled={isScrolled} />
    </a>

    <nav class="hidden lg:block">
      <ul class="flex flex-row items-center gap-3">
        {#each NavLinks as link}
          <li class="flex flex-row items-center gap-3">
            <a href={link.url} class="nav-link font-semibold text-neutral-700 py-2 px-4 rounded-md brutal-button active:bg-secondary-200 bg-light-grey"
              >{link.label}</a
            >
          </li>
        {/each}
        <li class="book-button-wrapper flex flex-row items-center gap-3 relative">
          
          <a
            href="/#"
            class="nav-link px-5 py-2 pr-12 rounded-md brutal-button bg-primary-500 hover:bg-primary-400 active:bg-secondary-200"
          >
            <span class="text-shadow-brutal">book a free strategy call</span>
            
          </a>
          <div class="absolute -top-2 -right-1 drop-shadow-brutal pointer-events-none">
            <div class="star">
              <OrnamentStar class="w-12 h-12 rotate-6" />
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="block lg:hidden">
      <button
        class="p-4"
        aria-label="Menu"
        onclick={() => {
          isMobileNavOpen = !isMobileNavOpen;
        }}
      >
        <ChevronDownIcon
          size={20}
          aria-hidden
          class={isMobileNavOpen ? "rotate-180" : "rotate-0"}
        />
      </button>
    </div>
  </div>

  {#if isMobileNavOpen}
    <nav class="container mx-auto py-6 px-6">
      <ul class="flex flex-col gap-3">
        {#each NavLinks as link}

          <li class="flex-row items-center gap-3 relative inline-block">
          
          <a
            href={link.url}
            class="nav-link shadow-1 border-2 border-neutral-700 rounded-full font-bold gap-2 px-5 py-2 pr-12 items-center bg-light-grey"
          >
            {link.label}
          </a>
        </li>
        {/each}
        <li class="flex-row items-center gap-3 relative inline-block">
          
          <a
            href="/#"
            class="nav-link shadow-1 border-2 border-neutral-700 rounded-full bg-primary-500 font-bold text-primary-foreground flex gap-2 px-5 py-2 pr-12 items-center"
          >
            book a free strategy call
          </a>
          <OrnamentStar class="absolute w-12 h-12 -top-2 -right-1 rotate-6 shadow-1" />
        </li>
      </ul>
    </nav>
  {/if}
</header>

<style>
  .star {
    animation: starSpin 2s infinite linear;
    animation-play-state: paused;
  }

  .book-button-wrapper:hover .star {
    animation-play-state: running;
  }

  @keyframes starSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
</style>
