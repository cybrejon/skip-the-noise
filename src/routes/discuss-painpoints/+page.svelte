<script lang="ts">
  import SiteHeader from "@components/ui/SiteHeader.svelte";
  import image_grid_background from "$lib/images/grid.svg";

  interface PainpointsForm {
    firstName: string | undefined;
    lastName: string | undefined;
    jobTitle: string | undefined;
    businessEmail: string | undefined;
    websiteURL: string | undefined;
    adBudgetOver20k: "no" | "yes";
    painpointDescription: string | undefined;
  }

  let painpointsFormData: PainpointsForm = $state({
    firstName: undefined,
    lastName: undefined,
    jobTitle: undefined,
    businessEmail: undefined,
    websiteURL: undefined,
    adBudgetOver20k: "no",
    painpointDescription: undefined,
  });
</script>

<SiteHeader />

<main class="isolate w-full overflow-x-clip" style={`background-image: url(${image_grid_background}); background-size: cover;`}>
  <!-- <div class="container mx-auto grid md:grid-cols-2">
  </div> -->
  {@render HeroSection()}
  {@render PainpointsFormSection()}
</main>

{#snippet HeroSection()}
  <section id="hero" class="flex flex-col py-12 pt-50 px-3 md:pr-6">
    <div class="container mx-auto">
      <hgroup class="flex flex-col justify-center items-center relative">
        <div
          class="text-white max-w-max flex justify-center items-center py-3 px-6 border-2 border-primary-950 rounded-full
          bg-primary-500 drop-shadow-brutal absolute -top-15 -rotate-6"
        >
          <p class="font-semibold">Let's discuss pain points</p>
        </div>

        <h1 class="text-center mb-[0.5em] tracking-tight">
          <!-- <Icon
            icon="noto:victory-hand"
            font-size="0.9em"
            style="grid-area: 1 / 1;"
            aria-hidden="true"
          /> -->
          Not sure how to fix your marketing hurdles? Let's talk!
        </h1>
        <p class="max-w-2xl text-center">
          With 8+ years solving problems for SaaS, eCommerce, and cybersecurity
          brands, we know how to deliver clarity and results.
        </p>
      </hgroup>
    </div>
  </section>
{/snippet}

{#snippet PainpointsFormSection()}
  <section id="painpoints-form" class="py-12 px-3 md:px-6">
    <div class="container mx-auto">
      <h2 class="h4 text-center mb-20">
        Share some details,<br />we'll email you with next steps.
      </h2>

      <!-- TODO: Add functionality to this form -->
      <form
        class="card max-w-2xl p-4 md:p-12 mx-auto mt-6 grid gap-6 bg-yellow-100 border-2 border-deep-indigo drop-shadow-brutal-card"
        onsubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <fieldset class="grid md:grid-cols-2 gap-3">
          <label class="font-semibold tracking-tight">
            <p>First Name</p>
            <input
              type="text"
              class="input bg-yellow-200"
              name="first-name"
              placeholder="e.g. Walter"
              bind:value={painpointsFormData.firstName}
              required
            />
          </label>
          <label class="font-semibold tracking-tight">
            <p>Last Name</p>
            <input
              type="text"
              class="input"
              name="last-name"
              placeholder="e.g. Underbridge"
              bind:value={painpointsFormData.lastName}
              required
            />
          </label>
        </fieldset>

        <label class="font-semibold tracking-tight">
          <p>Job Title</p>
          <input
            type="text"
            class="input"
            name="job-title"
            placeholder="e.g. Chief Marketing Officer"
            bind:value={painpointsFormData.jobTitle}
            required
          />
        </label>

        <label class="font-semibold tracking-tight">
          <p>Business Email</p>
          <input
            type="email"
            class="input"
            name="business-email"
            placeholder="e.g. walter@acme.com"
            bind:value={painpointsFormData.businessEmail}
            required
          />
        </label>

        <label class="font-semibold tracking-tight">
          <p>Website URL</p>
          <input
            type="url"
            class="input"
            name="website-url"
            placeholder="e.g. https://acme.com"
            bind:value={painpointsFormData.websiteURL}
            required
          />
        </label>

        <fieldset
          class="grid gap-3"
          data-option={painpointsFormData.adBudgetOver20k}
        >
          <p class="font-semibold tracking-tight">Is your ad budget greater than $20K per month?</p>
          <div class="relative grid grid-cols-2 gap-3">
            <label
              class=" flex justify-center items-center py-3 rounded-sm border-2 border-deep-indigo cursor-pointer
              {painpointsFormData.adBudgetOver20k === 'no'
                ? 'bg-yellow-500 drop-shadow-brutal -translate-y-1'
                : 'bg-white translate-y-0'}"
            >
              <p>No</p>
              <input
                type="radio"
                class="absolute pointer-events-none opacity-0"
                name="ad-budget"
                value="no"
                bind:group={painpointsFormData.adBudgetOver20k}
              />
            </label>
            <label
              class=" flex justify-center items-center py-3 rounded-sm border-2 border-deep-indigo cursor-pointer
              {painpointsFormData.adBudgetOver20k === 'yes'
                ? 'bg-yellow-500 drop-shadow-brutal -translate-y-1'
                : 'bg-white translate-y-0'}"
            >
              <p>Yes</p>
              <input
                type="radio"
                class="absolute pointer-events-none opacity-0"
                name="ad-budget"
                value="yes"
                bind:group={painpointsFormData.adBudgetOver20k}
              />
            </label>
          </div>
        </fieldset>

        <label class="grid gap-3">
          <p class="font-semibold tracking-tight">Describe your pain point</p>
          <input
            type="text"
            class="input"
            placeholder="in 15 words or less"
            bind:value={painpointsFormData.painpointDescription}
          />
        </label>

        <div class="flex flex-row justify-end items-center">
          <button
            class="brutal-button py-3 px-15 rounded-sm bg-secondary-500"
            type="submit">Submit</button
          >
        </div>
      </form>
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
  @reference "../../app.css";

  input, select {
    @apply rounded-sm bg-white drop-shadow-brutal;
  }
</style>