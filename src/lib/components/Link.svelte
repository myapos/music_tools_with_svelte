<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	export let onClick = () => {};

	export let url = '';
	export let description = '';
	export let target = '';
	export let className = '';

	$: isActive = false;

	afterNavigate(() => {
		isActive = url === $page.url.pathname;
	});

	onMount(() => {
		isActive = url === $page.url.pathname;
	});

	let classes = `${className}`;
</script>

<a
	href={url}
	{target}
	class={classes}
	class:text-orange-300={isActive}
	class:bg-red-800={isActive}
	on:click={onClick}
	>{description ? description : ''} <slot />
</a>

<style>
</style>
