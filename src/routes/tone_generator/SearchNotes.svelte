<script lang="ts">
	import Select from 'svelte-select';
	import { hashNotesFreq } from '$lib/audio/constants';
	import { frequency } from '$lib/stores/stores';

	export let oscillatorRef: { [key: string]: any } = {};

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

			const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
			if (oscillatorIsIntialized) {
				oscillatorRef.frequency.value = value;
			}

			frequency.update((prev) => {
				const newFreq = parseInt(value);

				return newFreq;
			});
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
