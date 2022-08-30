<script lang="ts">
	import Select from 'svelte-select';
	export let selectedType: Object;

	let items = [
		{ value: 'sine', label: 'Sine' },
		{ value: 'square', label: 'Square' },
		{ value: 'sawtooth', label: 'Sawtooth' },
		{ value: 'triangle', label: 'Triangle' }
	];
	const handleSelectType = (event: any) => {
		selectedType = event.detail;
	};

	console.log('selectedType edw', selectedType);
</script>

<Select
	containerClasses="w-3/5 p-5 rounded"
	{items}
	bind:value={selectedType}
	on:select={handleSelectType}
	placeholder="Select type"
/>
