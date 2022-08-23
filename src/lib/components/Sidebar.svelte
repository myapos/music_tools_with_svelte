<script lang="ts">
	import links from '$lib/constants/links';
	import Link from './Link.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidTimes from 'svelte-icons-pack/fa/FaSolidTimes';

	export let isOpen: Boolean;

	const onClick = () => {
		isOpen = !isOpen;
	};
</script>

<section class="flex flex-col justify-center absolute bg-blue-600 right-0 w-full">
	<div on:click={onClick} class="self-end">
		<Icon
			src={FaSolidTimes}
			size="2rem"
			color="var(--menu-text-blue-200)"
			title="mobile_menu_close_sidebar"
		/>
	</div>
	{#each links as link}
		<Link url={link.url} description={link.description} />
	{/each}
</section>
