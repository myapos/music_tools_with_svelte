<script lang="ts">
	/** @type {import('svelte-check/dist/svelte-jsx').svelteHTML} */
	import { roundedButtonClasses } from '$lib/constants/classStrings';

	export let onClick: svelteHTML.MouseEventHandler<HTMLDivElement>;
</script>

<div on:click={onClick} class={roundedButtonClasses}>
	<slot />
</div>
