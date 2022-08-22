<script>
	import '../app.css';
	import { Circle } from 'svelte-loading-spinners';
	import Menu from '$lib/components/Menu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let isLoading = true;
	onMount(() => {
		isLoading = false;
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

{#if isLoading}
	<main class="flex justify-center items-center w-full h-screen flex-col">
		<Circle size="60" color="#FF3E00" unit="px" duration="1s" />
	</main>
{:else}
	<Menu />

	<main class="flex justify-center items-center flex-col">
		<slot />
	</main>

	<Footer />
{/if}

<style>
	main {
		height: 80vh;
	}

	:global(body) {
		/* this will apply to <body> */
		height: 100vh;
		font-family: Roboto;
		background-color: #2563eb30;
		min-width: 640px;
	}
</style>
