<script lang="ts">
</script>

<main class="w-full">
  <section id="palettes" class="p-6 grid gap-4">
    {@render Palettes()}
  </section>
  <section id="typography" class="p-6 grid gap-4">
    {@render Typescale()}
  </section>
</main>

{#snippet Palettes()}
  <!-- Neutral -->
  <article class="w-full flex flex-col gap-3">
    <div class="h4">Neutral Palette</div>

    <div class="flex flex-row gap-3 flex-wrap">
      <div class="size-20 border border-neutral-200 bg-neutral-50"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-100"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-200"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-300"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-400"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-500"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-600"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-700"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-800"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-900"></div>
      <div class="size-20 border border-neutral-200 bg-neutral-950"></div>
    </div>
  </article>
  <!-- Primary -->
  <article class="w-full flex flex-col gap-3">
    <div class="h4">Primary Palette</div>

    <div class="flex flex-row gap-3 flex-wrap">
      <div class="size-20 border border-neutral-200 bg-primary-50"></div>
      <div class="size-20 border border-neutral-200 bg-primary-100"></div>
      <div class="size-20 border border-neutral-200 bg-primary-200"></div>
      <div class="size-20 border border-neutral-200 bg-primary-300"></div>
      <div class="size-20 border border-neutral-200 bg-primary-400"></div>
      <div class="size-20 border border-neutral-200 bg-primary-500"></div>
      <div class="size-20 border border-neutral-200 bg-primary-600"></div>
      <div class="size-20 border border-neutral-200 bg-primary-700"></div>
      <div class="size-20 border border-neutral-200 bg-primary-800"></div>
      <div class="size-20 border border-neutral-200 bg-primary-900"></div>
      <div class="size-20 border border-neutral-200 bg-primary-950"></div>
    </div>
  </article>
  <!-- Secondary -->
  <article class="w-full flex flex-col gap-3">
    <div class="h4">Secondary Palette</div>

    <div class="flex flex-row gap-3 flex-wrap">
      <div class="size-20 border border-neutral-200 bg-secondary-50"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-100"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-200"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-300"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-400"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-500"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-600"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-700"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-800"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-900"></div>
      <div class="size-20 border border-neutral-200 bg-secondary-950"></div>
    </div>
  </article>
{/snippet}

{#snippet Typescale()}
  <article class="w-full">
    <div class="h4">Typescale</div>

    <div class="flex flex-col gap-3">
      <div class="text-jumbo leading-none font-manrope font-bold">
        The quick brown fox jumps over the lazy dog
      </div>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <h3>The quick brown fox jumps over the lazy dog</h3>
      <h4>The quick brown fox jumps over the lazy dog</h4>
      <h5>The quick brown fox jumps over the lazy dog</h5>
      <h6>The quick brown fox jumps over the lazy dog</h6>
      <p>The quick brown fox jumps over the lazy dog</p>
      <small>The quick brown fox jumps over the lazy dog</small>
    </div>
  </article>
{/snippet}
