<script>
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Menu />
<!-- <nav class="flex justify-between p-5 bg-blue-600 text-blue-200">
	<a href="/">E-tuner</a>
	<a href="/metronome">Metronome</a>
	<a href="/tone_giver">Tone Giver</a>
	<a href="/manual">Manual</a>
	<a href="/links">Links</a>
	<a href="/terms">Terms Of Use</a>
	<a href="/about">About</a>
</nav> -->

<main class="flex justify-center items-center flex-col">
	<slot />
</main>

<Footer />

<style>
	main {
		height: 80vh;
	}

	:global(body) {
		/* this will apply to <body> */
		height: 100vh;
	}
</style>
