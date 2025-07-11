<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/scripts/utils";

  let marquee: HTMLDivElement;
  let isAnimated: boolean = $state(false);
  const platforms: string[] = [
    "facebook",
    "instagram",
    "google",
    "youtube",
    "tiktok",
    "pinterest",
    "reddit",
    "linkedin",
    "spotify",
    "amazon",
    "twitter",
  ];

  $effect(() => {
    if (marquee) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
        setTimeout(() => {
          isAnimated = true;
        }, 2000);
      }

      setTimeout(() => {
        marquee.style.visibility = "visible";
        marquee.style.opacity = "1";
      }, 2000);
    }
  });
</script>

<div
  class="marquee"
  style="opacity: 0; visibility: hidden;"
  data-is-animated={isAnimated}
  bind:this={marquee}
>
  <ul
    class="scroller h-full flex justify-center items-center gap-15 px-0 py-12"
  >
    {#each platforms as platform}
      <li class="">
        {@render PlatformLogo(platform)}
      </li>
    {/each}
    {#each platforms as platform}
      <li class="">
        {@render PlatformLogo(platform)}
      </li>
    {/each}
  </ul>
</div>

{#snippet PlatformLogo(platform: string)}
  <img
    src="/platforms/{platform}.svg"
    alt="{platform} logo"
    class="size-20 lg:size-30 aspect-square opacity-50 hover:opacity-80"
    title={capitalizeFirstLetter(platform)}
  />
{/snippet}

<style>
  @reference "../../app.css";

  .marquee {
    @apply w-full h-full select-none;
    &[data-is-animated="true"] {
      mask: linear-gradient(
        90deg,
        transparent,
        white 10%,
        white 90%,
        transparent
      );

      & > .scroller {
        @apply will-change-transform w-max;

        animation: playMarquee 30s linear infinite forwards;
        animation-play-state: running;
      }
    }

    &:hover > .scroller {
      animation-play-state: paused;
    }
  }

  @keyframes playMarquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - 1.875rem));
    }
  }
</style>
