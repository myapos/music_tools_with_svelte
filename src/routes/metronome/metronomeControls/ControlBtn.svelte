<script lang="ts">
	/** @type {import('svelte-check/dist/svelte-jsx').svelteHTML} */
	import { roundedButtonClasses } from '$lib/constants/classStrings';

	export let onClick: svelteHTML.MouseEventHandler<HTMLDivElement>;

	export let className = '';

	const classes = `${roundedButtonClasses} ${className}`;
</script>

<div on:click={onClick} class={classes}>
	<slot />
</div>
