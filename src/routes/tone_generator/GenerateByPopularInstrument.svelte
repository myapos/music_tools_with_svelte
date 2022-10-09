<script lang="ts">
	import analyticPopularTunings from '$lib/constants/analyticPopularTunings';
	import Select from 'svelte-select';

	//! convert popular tunings for usage with select
	const tuningKeys = Object.keys(analyticPopularTunings);
	const valuesForSelect = tuningKeys.map((key) => ({
		label: key,
		value: analyticPopularTunings[key]
	}));

	console.log('valuesForSelect', valuesForSelect);

	$: instrumentTones = [];
	$: instruments = [];
	$: hasSelectedInstrument = instrumentTones.length > 0;

	const handleInstrumentSelection = (event: any) => {
		const { value, label } = event.detail;
		instrumentTones = value.split(',');
		instruments = label.split(',');
		console.log('event', event, ' instruments', instruments);
	};

	//! event.detail will be null unless isMulti is true and user has removed a single item
	const handleClear = (event: any) => {
		instrumentTones = [];
	};

	const handleTone = (tone) => {
		console.log('tone', tone);
		// find frequency for instrument and tone
	};
</script>

<div
	class="flex flex-col items-center justify-center rounded p-2 text-center text-xl text-tuner-color">
	<div>Step 1</div>
	<div class="mt-2 text-sm">Please select instrument</div>
	<div class="mt-5 w-1/5 p-5"
		><Select
			containerClasses="p-5 mt-5 rounded"
			items={valuesForSelect}
			on:clear={handleClear}
			on:select={handleInstrumentSelection}
			placeholder="Select instrument" /></div>

	{#if hasSelectedInstrument}
		<div class="flex flex-row">
			{#each instrumentTones as tone, index}
				<div class="m-2 cursor-pointer" on:click={() => handleTone(tone)}>{tone}</div>
			{/each}
		</div>
	{/if}
</div>
