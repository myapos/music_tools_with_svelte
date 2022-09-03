<script lang="ts">
	import { onMount } from 'svelte';
	import Link from './Link.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { fade } from 'svelte/transition';
	import FaCopyright from 'svelte-icons-pack/fa/FaCopyright';
	import SiSvelte from 'svelte-icons-pack/si/SiSvelte';

	let isVisible = false;
	export let onClickOnTheRestArea: any;

	const intersectionOptions = {
		threshold: 0.5
	};

	onMount(() => {
		const THRESHOLD_FOR_SHORT_SCREENS = 600;

		let clientHeight = Math.max(
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);

		const isInShortScreen = clientHeight < THRESHOLD_FOR_SHORT_SCREENS;

		const interSectionObserverIsSupported =
			typeof window.IntersectionObserver !== 'undefined' &&
			typeof window.IntersectionObserverEntry.prototype !== 'undefined';

		if (isInShortScreen && interSectionObserverIsSupported) {
			const footerWrapper: any = window.document.querySelector('#footerWrapper');

			const observer = new IntersectionObserver((entries: any) => {
				const footerWrapperEntry = entries[0];

				if (footerWrapperEntry.isIntersecting) {
					isVisible = true;
					// observer.unobserve(footerWrapper);
				} else {
					isVisible = false;
				}
			}, intersectionOptions);

			observer.observe(footerWrapper);
		} else {
			//! it will be visible for screens with big height
			isVisible = true;
		}
	});
</script>

<div id="footerWrapper" />
{#if isVisible}
	<footer
		on:click={onClickOnTheRestArea}
		class="flex justify-center sticky bottom-0 bg-blue-600 text-blue-200 w-full md:mt-30"
		transition:fade
	>
		<div class="flex items-center">
			<Icon
				src={FaCopyright}
				size="1rem"
				color="var(--menu-text-blue-200)"
				title="copyright"
				className="mr-2"
			/>
			2022

			<Link
				url="mailto:myapos@gmail.com"
				description="Myron Apostolakis"
				target="_blank"
				className="p-5 cursor"
			/>

			Created with
			<div class="flex items-center">
				<Link url="https://svelte.dev/" description="" target="_blank" className="p-5 cursor">
					<Icon src={SiSvelte} size="1.3rem" title="svelte" className="ml-2" />
				</Link>
			</div>
		</div>
	</footer>
{/if}
