<script lang="ts">
  import SiteHeader from "@components/ui/SiteHeader.svelte";
  import Icon from "@iconify/svelte";

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

<main class="isolate w-full overflow-x-clip">
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
          class="card bg-primary-500 text-white border-2 border-deep-indigo drop-shadow-brutal-card"
        >
          <h6 class="">What's included:</h6>
          <ul class="list-disc pl-6">
            <li>
              <p>We listen</p>
            </li>
            <li>
              <p>We plan</p>
            </li>
            <li>
              <p>We work</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
{/snippet}

{#snippet TrialFormSection()}
  <section id="trial-form" class="py-12 px-3 md:px-6">
    <div class="container mx-auto">
      <h2 class="h4 text-center">
        Just fill out the form, we'll email you with next steps.
      </h2>

      <!-- TODO: Add functionality to this form -->
      <form
        class="card max-w-2xl p-4 md:p-12 mx-auto mt-6 grid gap-6 bg-white border-2 border-deep-indigo drop-shadow-brutal-card"
        onsubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <fieldset class="grid md:grid-cols-2 gap-3">
          <label class="">
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
          <label class="">
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

        <label class="">
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

        <label class="">
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

        <label class="">
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
          <p>Is your ad budget greater than $20K per month?</p>
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
          <p>What's your goal for the trial?</p>
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
