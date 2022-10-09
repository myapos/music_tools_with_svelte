<script lang="ts">
	import Select from 'svelte-select';
	import { hashNotesFreq } from '$lib/audio/constants';
	import { frequency, sliderPos, logarithmicScale } from '$lib/stores/stores';
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';

	export let timeoutId: number;
	export let handleTimeout: Function;

	export let oscillatorRef: { [key: string]: any } = {};

	const itemsHashNotes = Object.keys(hashNotesFreq).map((note) => {
		return {
			value: hashNotesFreq[note],
			label: note
		};
	});

	let selectedFreq: any = { value: '440', label: 'A4' };

	const handleTimeoutWrapper = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
	};

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

			sliderPos.update((prev) => {
				const newFreq = parseInt(value);
				return $logarithmicScale.position(newFreq);
			});

			handleTimeoutWrapper();
		}
	};
</script>

<Select
	containerClasses="w-3/5 p-5 rounded"
	items={itemsHashNotes}
	bind:value={selectedFreq}
	on:select={handleSelectFreq}
	placeholder="Select note" />
