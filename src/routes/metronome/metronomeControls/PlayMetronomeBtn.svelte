<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidStop from 'svelte-icons-pack/fa/FaSolidStop';
	import { roundedButtonClasses } from '$lib/constants/classStrings';

	export let isPlaying = false;
</script>

<div onClick={() => {}} class={roundedButtonClasses}>
	{#if !isPlaying}
		<Icon src={FaSolidPlay} size="1.3rem" color="var(--tuned)" title="play" />
	{:else}
		<Icon src={FaSolidStop} size="1.3rem" color="var(--background-black-red)" title="stop" />
	{/if}
</div>
