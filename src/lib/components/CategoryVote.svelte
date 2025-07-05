<script lang="ts">
  import { onMount } from 'svelte';
  import { submitVote } from '$lib/firebase/vote';

  export let category: string;
  export let options: string[];

  let selected: string = '';
  let hasSubmitted = false;

  // Deadline
  const deadline = new Date('2025-07-07T00:00:00+05:30');
  const now = new Date();
  const votingClosed = now >= deadline;

  const storageKey = `nostalgia_vote_${category.toLowerCase()}`;

  onMount(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      selected = stored;
      hasSubmitted = true;
    }
  });

  const handleSubmit = async () => {
    if (!selected || hasSubmitted || votingClosed) return;

    await submitVote(category, selected);
    localStorage.setItem(storageKey, selected); // lock it
    hasSubmitted = true;
  };
</script>

<div class="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-200 hover:shadow-blue-200 transition duration-300">
  <h2 class="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
    {category}
  </h2>

  {#if votingClosed}
    <p class="text-red-600 text-sm mb-4 italic">⛔ Voting for this category is now closed.</p>
  {/if}

  <div class="space-y-3">
    {#each options as option}
      <div
        class="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-3 bg-white/70 hover:bg-gradient-to-r from-indigo-50 to-pink-50 transition cursor-pointer shadow-sm hover:shadow-md"
      >
        <label class="flex items-center gap-3 w-full cursor-pointer">
          <input
            type="radio"
            name={category}
            value={option}
            bind:group={selected}
            class="accent-purple-600 scale-110"
            disabled={hasSubmitted || votingClosed}
          />
          <span class="text-gray-800 font-medium">{option}</span>
        </label>

        {#if selected === option}
          <span class="text-green-500 text-2xl animate-pulse">✔️</span>
        {/if}
      </div>
    {/each}
  </div>

  <button
    on:click={handleSubmit}
    disabled={!selected || hasSubmitted || votingClosed}
    class="mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {#if votingClosed}
      🚫 Voting Closed
    {:else if hasSubmitted}
      ✅ Vote Submitted
    {:else}
      🗳️ Submit Vote
    {/if}
  </button>
</div>
