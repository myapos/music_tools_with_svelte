<script lang="ts">
	import Select from 'svelte-select';
	export let selectedType: { [key: string]: any };
	export let oscillatorRef: { [key: string]: any };
	export let timeoutId: number;
	export let handleTimeout: Function;
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';

	let items = [
		{ value: 'sine', label: 'Sine' },
		{ value: 'square', label: 'Square' },
		{ value: 'sawtooth', label: 'Sawtooth' },
		{ value: 'triangle', label: 'Triangle' }
	];

	const handleTimeoutWrapper = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
	};
	const handleSelectType = (event: any) => {
		const oscillatorIsIntialized = oscillatorRef?.type.length > 0;

		if (oscillatorIsIntialized) {
			oscillatorRef.type = event.detail.value;
		}

		selectedType = event.detail;

		handleTimeoutWrapper();
	};
</script>

<Select
	containerClasses="w-3/5 md:w-4/5 p-5 rounded"
	{items}
	bind:value={selectedType}
	on:select={handleSelectType}
	placeholder="Select type"
/>
