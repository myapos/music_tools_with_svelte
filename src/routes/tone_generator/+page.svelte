<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import Button from '$lib/components/Button.svelte';
	import { selectedTuningMode } from '$lib/stores/stores';
	import GenerateByFrequency from './GenerateByFrequency.svelte';
	import GenerateByPopularInstrument from './GenerateByPopularInstrument.svelte';
	import Instructions from './Instructions.svelte';

	const h1ExtraClasses = 'p-8';

	const handleSelectionMode = (mode: string) => {
		selectedTuningMode.update((prev) => {
			return mode;
		});
	};
	const selectBtnClasses =
		'text-xl text-center text-tuner-color cursor-pointer w-1/5 md:w-2/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5';

	const isSelectedClass = 'bg-red-50';

	$: isInPopularInstrumentsGeneratorMode = $selectedTuningMode === 'TuneByPopularInstruments';
	$: isInFrequencyGeneratorGeneratorMode = $selectedTuningMode === 'TuneByFrequencySelection';
	$: shouldDisplayInitialMessage = $selectedTuningMode === '';
</script>

<H1 className={h1ExtraClasses}>Tone Generator</H1>
<section
	class="tools relative flex w-full flex-col justify-center bg-red-900 p-8 md:text-justify md:text-xl md:tracking-wide">
	{#if shouldDisplayInitialMessage}
		<div class="mx-auto w-2/5 rounded p-2 text-center text-xl text-tuner-color"
			>Please select generation mode
		</div>
	{/if}
	<div class="flex">
		<Button
			onClick={() => handleSelectionMode('TuneByPopularInstruments')}
			className={`${selectBtnClasses} ${
				isInPopularInstrumentsGeneratorMode ? isSelectedClass : ''
			}`}>Generate Tones Of Popular Instruments</Button>
		<Button
			onClick={() => handleSelectionMode('TuneByFrequencySelection')}
			className={`${selectBtnClasses} ${
				isInFrequencyGeneratorGeneratorMode ? isSelectedClass : ''
			}`}>Generate Tones By Frequency Selection</Button>
	</div>
	{#if isInPopularInstrumentsGeneratorMode}
		<GenerateByPopularInstrument />
	{/if}

	{#if isInFrequencyGeneratorGeneratorMode}
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
