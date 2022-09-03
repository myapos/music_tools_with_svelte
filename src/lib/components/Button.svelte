<script lang="ts">
	/** @type {import('svelte-check/dist/svelte-jsx').svelteHTML} */
	export let onClick: svelteHTML.MouseEventHandler<HTMLDivElement>;
	export let className: string;
</script>

<div on:click={onClick} class={className}>
	<slot />
</div>
