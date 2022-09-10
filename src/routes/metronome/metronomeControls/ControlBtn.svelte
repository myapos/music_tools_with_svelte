<script lang="ts">
	/** @type {import('svelte-check/dist/svelte-jsx').svelteHTML} */
	import { roundedButtonClasses } from '$lib/constants/classStrings';

	export let onClick: svelteHTML.MouseEventHandler<HTMLDivElement>;
	export let handleMouseDown: svelteHTML.MouseEventHandler<HTMLDivElement> = () => {};
	export let handleMouseUp: svelteHTML.MouseEventHandler<HTMLDivElement> = () => {};

	export let className = '';

	const classes = `${roundedButtonClasses} ${className}`;
</script>

<div on:click={onClick} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} class={classes}>
	<slot />
</div>
