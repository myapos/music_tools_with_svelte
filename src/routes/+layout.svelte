<script>
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<Menu />

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
		font-family: Roboto;
	}
</style>
