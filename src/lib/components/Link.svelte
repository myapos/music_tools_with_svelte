<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	export let url = '';
	export let description = '';
	export let target = '';

	$: isActive = false;

	afterNavigate(() => {
		isActive = url === $page.url.pathname;
	});

	onMount(() => {
		isActive = url === $page.url.pathname;
	});
</script>

<a
	href={url}
	class="hover:text-blue-50 p-5"
	{target}
	class:text-orange-300={isActive}
	class:bg-red-800={isActive}
	>{description}
</a>

<style>
</style>
