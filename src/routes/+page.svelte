<script lang="ts">
  import CategoryVote from '$lib/components/CategoryVote.svelte';
   import { goto } from '$app/navigation';

  const shows = [ 'How I Met Your Mother', 'WWE', 'Sarabhai vs Sarabhai', 'CID', 'Shinchan', 'Drake & Josh', 'Hannah Montana', 'MTV Roadies', 'Wizards of Waverly Place', 'Suite Life of Zack & Cody' ];
  const movies = [ '3 Idiots', 'The Dark Knight', 'Inception', 'Zindagi Na Milegi Dobara', 'Avatar (2009)', 'Harry Potter (All)', 'Krrish', 'Lagaan', 'Iron Man', 'Dhoom 2' ];
  const music = [ 'Linkin Park – In the End', 'Eminem – Love the Way You Lie', 'Yo Yo Honey Singh – High Heels', 'Taylor Swift – Love Story', 'Green Day – Boulevard of Broken Dreams', 'Atif Aslam – Tera Hone Laga Hoon', 'Coldplay – Viva La Vida', 'Akon – Smack That', 'Arijit Singh – Tum Hi Ho', 'Backstreet Boys – I Want It That Way' ];
  const games = [ 'GTA San Andreas', 'Counter Strike 1.6', 'Call of Duty MW2', 'NFS Most Wanted', 'Temple Run', 'Angry Birds', 'Clash of Clans', 'Tekken 5', 'WWE SmackDown vs Raw', 'Subway Surfers' ];
  const cartoon = [ 'Ben 10', 'Dragon Ball Z', 'Pokemon', 'Courage the Cowardly Dog', 'Tom and Jerry', 'Doraemon', 'Phineas and Ferb', 'Johnny Bravo', 'Powerpuff Girls', 'Scooby-Doo' ];

 

  const cutoff = new Date('2025-07-07T00:00:00+05:30');

  if (new Date() >= cutoff) {
    goto('/results');
  }
</script>

<!-- Header -->
<header class="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-6 px-6 shadow-md">
  <h1 class="text-4xl font-extrabold tracking-wide drop-shadow-md">🕹️ Nostalgia Voter</h1>
  <p class="text-sm text-gray-100 mt-1 italic">Where memories get one more vote 🎤</p>
</header>

<!-- Main Content -->
<main class="bg-gradient-to-br from-yellow-50 via-white to-pink-50 text-center min-h-screen">
  <!-- Welcome Section -->
  <section class="py-12 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold mb-4 text-gray-800 underline decoration-wavy decoration-pink-500">
      Welcome to the Ultimate Throwback!
    </h2>
    <p class="text-lg text-gray-700 mb-6">
      Vote for your all-time favorite Shows, Movies, Music, Games, and Cartoons.  
      Revisit your childhood and see what resonated with the rest of us ‘90s & 2000s kids.
    </p>

    <img
  src="https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif"
  alt="Retro vibes"
  class="mx-auto rounded-xl shadow-xl w-full max-w-md transition-transform hover:scale-105 mb-10"
/>

  </section>

<!-- Voting Panels -->
<section class="max-w-6xl mx-auto px-4 pb-16">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <CategoryVote category="Show" options={shows} />
    <CategoryVote category="Movie" options={movies} />
    <CategoryVote category="Music" options={music} />
    <CategoryVote category="Game" options={games} />
    <CategoryVote category="Cartoon" options={cartoon} />
  </div>
</section>

</main>

<!-- Footer -->
<footer class="bg-gray-900 text-gray-300 text-sm text-center py-4 font-mono tracking-wide">
  <p>© {new Date().getFullYear()} Nostalgia Voter — Built with ❤️ for the MTV-WWE-Shinchan generation.</p>
</footer>
