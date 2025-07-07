<script lang="ts">
  import { ChevronDownIcon, WandSparklesIcon } from "lucide-svelte";
  import Logo from "./Logo.svelte";

  let isScrolled: boolean = $state(false);
  let isMobileNavOpen: boolean = $state(false);

  const NavLinks = [
    {
      label: "services",
      url: "/#",
    },
    {
      label: "about",
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
  class="fixed inset-x-0 top-0 z-20 flex flex-col px-3 border-b {isScrolled ||
  isMobileNavOpen
    ? 'bg-white border-neutral-200'
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
            <a href={link.url} class="nav-link font-semibold hover:opacity-50"
              >{link.label}</a
            >
            <span class="opacity-20 pointer-events-none select-none">/</span>
          </li>
        {/each}
        <li class="flex flex-row items-center gap-3">
          <a
            href="/#"
            class="nav-link font-bold text-primary-500 hover:text-secondary-500 flex gap-2 items-center"
          >
            <span>book a free strategy call</span>
            <WandSparklesIcon size={20} />
          </a>
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
          <li class="flex flex-row items-center gap-3">
            <a href={link.url} class="nav-link font-semibold hover:opacity-50"
              >{link.label}</a
            >
          </li>
        {/each}
        <li class="flex flex-row items-center gap-3">
          <a
            href="/#"
            class="nav-link font-bold text-primary-500 hover:text-secondary-500 flex gap-2 items-center"
          >
            <span>book a free strategy call</span>
            <WandSparklesIcon size={20} />
          </a>
        </li>
      </ul>
    </nav>
  {/if}
</header>
