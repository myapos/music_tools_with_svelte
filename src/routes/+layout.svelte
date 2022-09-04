<script lang="ts">
	import '../app.css';
	import UAParser from 'ua-parser-js';
	import { Circle } from 'svelte-loading-spinners';
	import { onMount } from 'svelte';

	import Menu from '$lib/components/Menu.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import breakpoints from '$lib/constants/breakpoints';
	import Modal from 'svelte-simple-modal';

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

	let parser = new UAParser();
	const parsed = parser.getResult();

	let shouldApplyFullModal = false;

	const { browser, device, os } = parsed;
	const blackListBrowsers = ['Samsung Browser', 'Mobile Safari', 'Firefox'];
	const blackListOs = ['Android'];

	shouldApplyFullModal =
		blackListBrowsers.includes(browser.name) &&
		device.type === 'mobile' &&
		blackListOs.includes(os.name);
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} bind:scrollY />

<Modal styleBg={{ width: '100%', height: '100%' }}>
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
</Modal>

<style>
	:global(body) {
		/* this will apply to <body> */
		height: 100vh;
		font-family: Roboto;
		background-color: #2563eb30;
		min-width: 640px;
	}
</style>
