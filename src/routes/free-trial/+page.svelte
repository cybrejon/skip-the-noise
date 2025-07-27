<script lang="ts">
  import SiteHeader from "@components/ui/SiteHeader.svelte";
  import Icon from "@iconify/svelte";
  import image_grid_background from "$lib/images/grid.svg";

  type Goal =
    | "Test a new platform"
    | "Improve performance"
    | "Generate leads"
    | "Increase revenue"
    | "Test TikTok Shop"
    | "Streamline current process"
    | "Other";

  interface TrialForm {
    firstName: string | undefined;
    lastName: string | undefined;
    jobTitle: string | undefined;
    businessEmail: string | undefined;
    websiteURL: string | undefined;
    adBudgetOver20k: "no" | "yes";
    trialGoal: Goal;
    otherGoal: string | undefined;
  }

  let TrialGoals: string[] = [
    "Test a new platform",
    "Improve performance",
    "Generate leads",
    "Increase revenue",
    "Test TikTok Shop",
    "Streamline current process",
    "Other",
  ];
  let trialFormData: TrialForm = $state({
    firstName: undefined,
    lastName: undefined,
    jobTitle: undefined,
    businessEmail: undefined,
    websiteURL: undefined,
    adBudgetOver20k: "no",
    trialGoal: "Test a new platform",
    otherGoal: undefined,
  });
</script>

<SiteHeader />

<main class="isolate w-full overflow-x-clip" style={`background-image: url(${image_grid_background}); background-size: cover;`}>
  <!-- <div class="container mx-auto grid md:grid-cols-2">
  </div> -->
  {@render HeroSection()}
  {@render TrialFormSection()}
  {@render BookendSection()}
</main>

{#snippet HeroSection()}
  <section id="hero" class="flex flex-col py-12 pt-50 px-3 md:pr-6">
    <div class="container mx-auto grid md:grid-cols-2 gap-12">
      <hgroup class="flex flex-col justify-center items-center relative">
        <h1 class="text-center md:text-start mb-[0.5em] tracking-tight">
          See what
          <div class="inline-grid grid-cols-1" aria-label="2" title="2">
            <Icon
              icon="noto:victory-hand"
              font-size="0.9em"
              style="grid-area: 1 / 1;"
              aria-hidden="true"
            />
            <span
              style="grid-area: 1 / 1;"
              class="text-transparent inline-block">2</span
            >
          </div>
          weeks can do, when you
          <span class="text-secondary-500">skip the noise</span>
        </h1>
        <div
          class="max-w-max flex justify-center items-center py-3 px-6 border-2 border-yellow-950 rounded-full
          bg-yellow-500 drop-shadow-brutal absolute bottom-0 sm:right-6 -rotate-6 sm:-rotate-12 translate-y-6 sm:translate-y-0"
        >
          <p class="font-semibold">at no upfront cost.</p>
        </div>
      </hgroup>

      <div class="">
        <div
          class="card bg-primary-500 border-2 border-deep-indigo drop-shadow-brutal-card"
        >
                <div
          class="p-2 md:p-4 flex border-b-2 bg-deep-indigo"
        >
          <div class="flex gap-2 md:gap-3 items-center justify-center">
            {#each Array.from({ length: 3 }) as item}
              <span class="h-4 w-4 md:h-6 md:w-6 bg-primary-400 rounded-full"
            ></span>
            {/each}
          </div>
        </div>
          <div class="p-12 text-primary-foreground">
            <h6 class="text-5xl">What's included:</h6>
            <ul>
              <li class="flex items-center gap-2">
                <Icon icon="openmoji:check-mark" style='font-size: 2.5rem;' /><p class="text-lg">We listen</p>
              </li>
              <li class="flex items-center gap-2">
                <Icon icon="openmoji:check-mark" style='font-size: 2.5rem;' /><p class="text-lg">We plan</p>
              </li>
              <li class="flex items-center gap-2">
                <Icon icon="openmoji:check-mark" style='font-size: 2.5rem;' /><p class="text-lg">We work</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
{/snippet}

{#snippet TrialFormSection()}
  <section id="trial-form" class="py-12 px-3 md:px-6">
    <div class="container mx-auto">
      <h2 class="h4 text-center">
        Just fill out the form, <br />we'll email you with next steps.
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
              class="input"
              name="first-name"
              placeholder="e.g. Walter"
              bind:value={trialFormData.firstName}
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
              bind:value={trialFormData.lastName}
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
            bind:value={trialFormData.jobTitle}
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
            bind:value={trialFormData.businessEmail}
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
            bind:value={trialFormData.websiteURL}
            required
          />
        </label>

        <fieldset
          class="grid gap-3"
          data-option={trialFormData.adBudgetOver20k}
        >
          <p class="font-semibold tracking-tight">Is your ad budget greater than $20K per month?</p>
          <div class="relative grid grid-cols-2 gap-3">
            <label
              class=" flex justify-center items-center py-3 rounded-sm border-2 border-deep-indigo cursor-pointer
              {trialFormData.adBudgetOver20k === 'no'
                ? 'bg-yellow-500 drop-shadow-brutal -translate-y-1'
                : 'bg-white translate-y-0'}"
            >
              <p>No</p>
              <input
                type="radio"
                class="absolute pointer-events-none opacity-0"
                name="ad-budget"
                value="no"
                bind:group={trialFormData.adBudgetOver20k}
              />
            </label>
            <label
              class=" flex justify-center items-center py-3 rounded-sm border-2 border-deep-indigo cursor-pointer
              {trialFormData.adBudgetOver20k === 'yes'
                ? 'bg-yellow-500 drop-shadow-brutal -translate-y-1'
                : 'bg-white translate-y-0'}"
            >
              <p>Yes</p>
              <input
                type="radio"
                class="absolute pointer-events-none opacity-0"
                name="ad-budget"
                value="yes"
                bind:group={trialFormData.adBudgetOver20k}
              />
            </label>
          </div>
        </fieldset>

        <fieldset class="grid gap-3" data-goal={trialFormData.trialGoal}>
          <p class="font-semibold tracking-tight">What's your goal for the trial?</p>
          <select
            name="trial-goal"
            id="trial-goal"
            class="border-2"
            bind:value={trialFormData.trialGoal}
          >
            {#each TrialGoals as goal}
              <option value={goal}>{goal}</option>
            {/each}
          </select>

          {#if trialFormData.trialGoal === "Other"}
            <label class="">
              <p>Enter your particular goal</p>
              <input
                type="text"
                class="input"
                bind:value={trialFormData.otherGoal}
              />
            </label>
          {/if}
        </fieldset>

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
      <div
        class="flex justify-center items-center p-6"
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
    @apply rounded-sm;
  }
</style>