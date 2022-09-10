<script lang="ts">
	/** @type {import('svelte-check/dist/svelte-jsx').svelteHTML} */
	import { roundedButtonClasses } from '$lib/constants/classStrings';

	export let onClick: svelteHTML.MouseEventHandler<HTMLDivElement>;
	export let handleDecreaseMouseDown: svelteHTML.MouseEventHandler<HTMLDivElement> = () => {};
	export let handleDecreaseMouseUp: svelteHTML.MouseEventHandler<HTMLDivElement> = () => {};

	export let className = '';

	const classes = `${roundedButtonClasses} ${className}`;
</script>

<div
	on:click={onClick}
	on:mousedown={handleDecreaseMouseDown}
	on:mouseup={handleDecreaseMouseUp}
	class={classes}
>
	<slot />
</div>
