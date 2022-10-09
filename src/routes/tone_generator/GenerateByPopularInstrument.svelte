<script lang="ts">
	import { onDestroy, getContext, onMount } from 'svelte';
	import analyticPopularTunings from '$lib/constants/analyticPopularTunings';
	import Select from 'svelte-select';
	import Button from '$lib/components/Button.svelte';
	import { hashNotesFreq, hashFreqNotes } from '$lib/audio/constants';
	import Popup from '$lib/components/Popup.svelte';
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';
	import { frequency } from '$lib/stores/stores';
	import Volume from './Volume.svelte';
	import WaveType from './WaveType.svelte';

	//! globals for contenxt
	let gain: { [key: string]: any };
	let audioContext: { [key: string]: any };
	let timeoutId: number;
	let oscillatorRef: any;
	//! initial volume setting
	let volumePosition: number = 0.1;
	//! initial value of select
	let selectedType = { value: 'sine', label: 'Sine' };

	const { open }: any = getContext('simple-modal');

	//! convert popular tunings for usage with select
	const tuningKeys = Object.keys(analyticPopularTunings);
	const valuesForSelect = tuningKeys.map((key) => ({
		label: key,
		value: analyticPopularTunings[key]
	}));

	const tones: Array<string> = [];
	$: instrumentTones = tones;
	$: instruments = [];
	$: hasSelectedInstrument = instrumentTones.length > 0;
	$: isPlaying = false;

	onMount(() => {
		instrumentTones = [];

		frequency.update((prev) => {
			const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
			if (oscillatorIsIntialized) {
				oscillatorRef.frequency.value = 0;
			}
			return 0;
		});
	});

	onDestroy(() => {
		if (isPlaying) {
			stop({ g: gain, context: audioContext });
		}
	});

	const handleInstrumentSelection = (event: any) => {
		const { value, label } = event.detail;
		instrumentTones = value.split(',');
		instruments = label.split(',');
		frequency.update((prev) => {
			const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
			if (oscillatorIsIntialized) {
				//! -1 will trigger the selected frequency to be undefined
				//! on changing the instrument so the user will have to select a note
				oscillatorRef.frequency.value = -1;
			}
			return -1;
		});
	};

	//! event.detail will be null unless isMulti is true and user has removed a single item
	const handleClear = (event: any) => {
		instrumentTones = [];
	};

	const handleTone = (tone: string) => {
		// find frequency for instrument and tone
		const freq: any = hashNotesFreq[tone.toString().trim()];

		frequency.update((prev) => {
			const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
			if (oscillatorIsIntialized) {
				oscillatorRef.frequency.value = freq;
			}
			return freq;
		});
	};

	const stop = ({ g, context }: any) => {
		isPlaying = false;
		g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04);

		if (audioContext.state === 'running') {
			audioContext.close();
		}
		clearTimeout(timeoutId);
	};

	const showPopup = ({ message }: { message: string }) => {
		return open(Popup, { message });
	};

	const handleTimeout = () => {
		if (isPlaying) {
			//! stop
			stop({ g: gain, context: audioContext });
			showPopup({
				message: `Period of ${DEFAULT_TIMEOUT_DURATION / 1000} secs exceeded after last action`
			});
		}
	};

	const handleGenerator = (frequency = 300) => {
		if (isPlaying) {
			//! stop
			stop({ g: gain, context: audioContext });
		} else {
			const context = new AudioContext();
			audioContext = context;
			const oscillator = context.createOscillator();
			const g = context.createGain();

			gain = g;

			gain.gain.value = volumePosition;
			oscillator.connect(g);
			g.connect(context.destination);

			oscillator.type = selectedType.value;
			oscillator.frequency.value = frequency;

			oscillatorRef = oscillator;
			oscillator.start(0);

			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
			isPlaying = true;
		}
	};

	const toneClasses = 'm-2 cursor-pointer';

	$: hasSelectedTone = typeof hashFreqNotes[$frequency] !== 'undefined';
</script>

<div
	class="flex flex-col items-center justify-center rounded p-2 text-center text-xl text-tuner-color">
	<div>Step 1</div>
	<div class="mt-2 text-sm">Please select instrument</div>
	<div class="mt-5 w-1/5 p-5 md:w-2/5"
		><Select
			containerClasses="p-5 mt-5 rounded"
			items={valuesForSelect}
			on:clear={handleClear}
			on:select={handleInstrumentSelection}
			placeholder="Select instrument" /></div>

	{#if hasSelectedInstrument}
		<div class="flex flex-row">
			{#each instrumentTones as tone}
				<div
					class={hashFreqNotes[$frequency] === tone.toString().trim()
						? `${toneClasses} text-red-200`
						: toneClasses}
					on:click={() => handleTone(tone)}>{tone}</div>
			{/each}
		</div>
		<div>Step 2</div>
		{#if hasSelectedTone}
			<div class="mt-2 text-base">Selected frequency {$frequency} Hz</div>

			<div
				class="justify-centers mx-auto flex w-1/2 flex-row items-center justify-center md:w-full">
				<div class="w-2/5 md:w-3/5">
					<Volume bind:gain bind:volumePosition bind:timeoutId {handleTimeout} />
					<div class="text-center text-sm"
						>Volume {parseInt((100 * volumePosition).toFixed())} %</div>
				</div>
				<Button
					onClick={() => handleGenerator($frequency)}
					className="text-xl text-center text-tuner-color cursor-pointer w-2/5 md:w-3/5 p-2 bg-black hover:bg-red-900 hover:text-black rounded mx-auto"
					>{isPlaying ? 'Stop' : 'Play'}!
				</Button>
				<div class="ml-5 w-2/5 md:w-3/5">
					<WaveType
						bind:selectedType
						bind:oscillatorRef
						bind:volumePosition
						bind:timeoutId
						{handleTimeout} />
				</div>
			</div>
		{:else}
			<div class="mt-2 text-sm">Please select tone</div>
		{/if}
	{/if}
</div>
