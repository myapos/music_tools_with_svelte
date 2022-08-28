<script lang="ts">
	import '../app.css';
	import { Circle } from 'svelte-loading-spinners';
	import { onMount } from 'svelte';

	import Menu from '$lib/components/Menu.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import breakpoints from '$lib/constants/breakpoints';

	let isLoading = true;
	let screenWidth: number;
	let scrollY: number;

	onMount(() => {
		isLoading = false;
	});

	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
	};
	const onClick = () => {
		toggle();
	};

	const onClickOnTheRestArea = () => {
		const isSmallerThanTablet = screenWidth <= breakpoints.md;

		if (isOpen && isSmallerThanTablet) {
			toggle();
		}
	};
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} bind:scrollY />

{#if isLoading}
	<main class="flex justify-center items-center w-full h-screen flex-col">
		<Circle size="60" color="#FF3E00" unit="px" duration="1s" />
	</main>
{:else}
	<Menu />
	<MobileMenu bind:isOpen {onClick} />

	<main
		class="flex justify-center items-center flex-col overflow-auto"
		on:click={onClickOnTheRestArea}
	>
		<slot />
	</main>

	<Footer {onClickOnTheRestArea} />
{/if}

<style>
	:global(body) {
		/* this will apply to <body> */
		height: 100vh;
		font-family: Roboto;
		background-color: #2563eb30;
		min-width: 640px;
	}
	:global(body > div) {
		/* this will apply to <body> */
		display: flex;
		flex-direction: column;
	}
</style>
