<script lang="ts">
	import Link from './Link.svelte';
	import links from '$lib/constants/links';
</script>

<nav class="flex justify-evenly bg-blue-600 text-blue-200 w-full md:hidden hover:text-blue-50">
	{#each links as link}
		<Link url={link.url} description={link.description} className="p-5" />
	{/each}
</nav>
