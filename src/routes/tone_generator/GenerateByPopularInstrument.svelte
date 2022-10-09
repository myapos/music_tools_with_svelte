<script lang="ts">
	import popularTunings from '$lib/constants/popularTunings';
	import Select from 'svelte-select';
	//! convert popular tunings for usage with select

	const tuningKeys = Object.keys(popularTunings);
	const valuesForSelect = tuningKeys.map((key) => ({
		label: key,
		value: popularTunings[key]
	}));

	console.log('valuesForSelect', valuesForSelect);

	const handleInstrumentSelection = (event: any) => {
		const hasValue = typeof event.detail.value !== 'undefined';
		const { value } = event.detail;
		console.log('value', value);
	};
</script>

<div class="mx-auto mt-5 w-2/5 rounded text-center text-xl text-tuner-color"
	><Select
		containerClasses="w-2/5 p-5 mt-5 rounded"
		items={valuesForSelect}
		on:select={handleInstrumentSelection}
		placeholder="Select instrument" />
</div>
