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

<a href={url} class="hover:text-blue-50" {target} class:text-red-400={isActive}>{description} </a>

<style>
</style>
