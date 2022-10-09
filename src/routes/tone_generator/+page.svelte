<script lang="ts">
	import { onDestroy, getContext, onMount } from 'svelte';

	import H1 from '$lib/components/H1.svelte';
	import Button from '$lib/components/Button.svelte';
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';
	import {
		MIN_RANGE_FREQ,
		MAX_RANGE_FREQ,
		frequency,
		sliderPos,
		logarithmicScale,
		startingPos,
		STARTING_FREQ,
		selectedTuningMode
	} from '$lib/stores/stores';
	import Popup from '$lib/components/Popup.svelte';
	import GenerateByFrequency from './GenerateByFrequency.svelte';
	import GenerateByPopularInstrument from './GenerateByPopularInstrument.svelte';
	import Instructions from './Instructions.svelte';

	const { open }: any = getContext('simple-modal');

	const h1ExtraClasses = 'p-8';

	const handleSelectionMode = (mode: string) => {
		selectedTuningMode.update((prev) => {
			return mode;
		});
	};
</script>

<H1 className={h1ExtraClasses}>Tone Generator</H1>
<section
	class="tools relative flex w-full flex-col justify-center bg-red-900 p-8 md:text-justify md:text-xl md:tracking-wide">
	<div class="mx-auto w-2/5 rounded p-2 text-center text-xl text-tuner-color"
		>Please select generation mode
	</div>
	<div class="flex">
		<Button
			onClick={() => handleSelectionMode('TuneByPopularInstruments')}
			className="text-xl text-center text-tuner-color cursor-pointer w-1/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5"
			>Generate By Popular Instruments</Button>
		<Button
			onClick={() => handleSelectionMode('TuneByFrequencySelection')}
			className="text-xl text-center text-tuner-color cursor-pointer w-1/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5"
			>Generate By Frequency Selection</Button>
	</div>

	{#if $selectedTuningMode === 'TuneByPopularInstruments'}
		<GenerateByPopularInstrument />
	{:else if $selectedTuningMode === 'TuneByFrequencySelection'}
		<GenerateByFrequency />
	{/if}
</section>
<Instructions />

<style>
	.tools {
		background-color: var(--background-black-red);
		min-height: 300px;
	}
</style>
