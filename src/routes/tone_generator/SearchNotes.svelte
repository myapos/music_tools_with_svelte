<script lang="ts">
	import Select from 'svelte-select';
	import { hashNotesFreq } from '$lib/audio/constants';
	export let frequency: number;

	const itemsHashNotes = Object.keys(hashNotesFreq).map((note) => {
		return {
			value: hashNotesFreq[note],
			label: note
		};
	});

	let selectedFreq: any = { value: '440', label: 'A4' };

	const handleSelectFreq = (event: any) => {
		const hasValue = typeof event.detail.value !== 'undefined';
		const { value } = event.detail;

		if (hasValue) {
			selectedFreq = event.detail;
			frequency = parseInt(value);
		}
	};
</script>

<Select
	containerClasses="w-3/5 p-5 rounded"
	items={itemsHashNotes}
	bind:value={selectedFreq}
	on:select={handleSelectFreq}
	placeholder="Search notes"
/>
