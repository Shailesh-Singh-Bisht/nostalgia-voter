<script lang="ts">
  import { onMount } from 'svelte';
  import { getTopVotes } from '$lib/firebase/getResults';

  let results: Record<string, { name: string; count: number }[]> = {};
  let loading = true;

  onMount(async () => {
    results = await getTopVotes();
    loading = false;
  });
</script>

<svelte:head>
  <title>📊 Nostalgia Results</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-100 p-6 max-w-5xl mx-auto text-center">
  <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600 mb-4 drop-shadow-lg">
    🏆 Nostalgia Voting Results
  </h1>
  <p class="text-lg text-gray-700 mb-10 italic">Here’s what ruled our memories and crushed the competition.</p>

  {#if loading}
    <p class="text-xl text-gray-500 animate-pulse">Loading results...</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each Object.entries(results) as [category, topVotes]}
        <section class="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-yellow-200 transition">
          <h2 class="text-2xl font-bold capitalize mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            {category}
          </h2>
          <ul class="space-y-3">
            {#each topVotes as vote, i}
              <li class="flex justify-between items-center px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-100 via-white to-pink-100 border border-gray-300 shadow-sm">
                <span class="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'} {vote.name}
                </span>
                <span class="text-gray-600 text-sm">{vote.count} vote(s)</span>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  {/if}
</main>
