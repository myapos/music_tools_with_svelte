<script lang="ts">
	/** @type {import('@sveltejs/kit')} */
	export let onClick: any;
	export let className: string;
	//MouseEventHandler<HTMLDivElement>
</script>

<div on:click={onClick} class={className}>
	<slot />
</div>
