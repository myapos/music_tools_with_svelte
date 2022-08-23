<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
	import Sidebar from './Sidebar.svelte';

	export let isOpen: Boolean;
	export let onClick: svelte.JSX.MouseEventHandler<HTMLDivElement>;
</script>

<div
	class=" p-5 bg-blue-600 text-blue-200 w-full hidden md:flex md:justify-between relative md:z-10"
>
	<div class="text-center w-full md:text-xl">Mobile Menu</div>
	<div on:click={onClick}>
		<Icon
			src={FaSolidBars}
			size="2rem"
			color="var(--menu-text-blue-200)"
			title="mobile_menu_open_sidebar"
		/>
	</div>
	{#if isOpen}
		<Sidebar bind:isOpen />
	{/if}
</div>
