<script lang="ts">
	import { onMount } from 'svelte';
	import audio from '$lib/audio/audio';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { stateNoteInfo, stateAudioContext, startedTuning } from '$lib/stores/stores';
	import Button from '$lib/components/Button.svelte';
	import DisplayNote from './DisplayNote.svelte';
	import { minimumThreshold } from '$lib/audio/constants';
	import { getContext } from 'svelte';
	import Popup from '$lib/components/Popup.svelte';
	import stopTuning from '$lib/utils/stopTuning';

	const { open }: { open: Function } = getContext('simple-modal');

	const showPopup = ({ message }: { message: string }) => open(Popup, { message });

	let note_negative_50 = '-50Hz';
	let note_negative_25 = '-25Hz';
	let note_0 = '0Hz';
	let note_positive_25 = '25Hz';
	let note_positive_50 = '50Hz';
	let tunedDeviation = 10; //! Hz

	const tweenConfig = {
		duration: 400,
		easing: cubicOut
	};

	$: degreesOffset = (90 / minimumThreshold) * $stateNoteInfo.deviation;

	$: rotate = tweened(0, tweenConfig);

	$: {
		$rotate = degreesOffset;
	}

	/**
	 * It will translate the deviation from the nearest note to degrees
	 * offset for display in the arc	 *
	 **/
	const transform = () => {
		$rotate = 45;
	};

	$: isTuned = $startedTuning && Math.abs(degreesOffset) < tunedDeviation;

	onMount(() => {
		//! reset to initial state on mount
		stateNoteInfo.update((prev) => {
			return { note: '', deviation: 0 };
		});
	});
</script>

<div>
	<div class="relative flex flex-col">
		<div class="arc" on:click={transform} class:tuned={isTuned} />
		<div class="indicator absolute bg-tuner-color" style="transform: rotate({$rotate}deg);" />
		<div class="note note_negative_50 bottom_50 absolute text-2xl">{note_negative_50}</div>
		<div class="note note_negative_25 bottom_25 absolute text-2xl">{note_negative_25}</div>
		<div class="note note_0 absolute text-2xl">{note_0}</div>
		<div class="note note_positive_25 bottom_25 absolute text-2xl">{note_positive_25}</div>
		<div class="note note_positive_50 bottom_50 absolute text-2xl">{note_positive_50}</div>
	</div>

	<Button
		onClick={() => {
			if ($startedTuning) {
				//! if it already started and click again stop tuning
				stopTuning({
					startedTuningCtx: startedTuning,
					audioContenxt: stateAudioContext,
					isTuning: $startedTuning
				});
			} else {
				//! start tuning
				console.log('start tuning');

				audio(showPopup);
				startedTuning.update((prev) => {
					return true;
				});
			}
		}}
		className="start text-xl text-center text-tuner-color cursor-pointer
	w-2/5 p-2 bg-black hover:bg-red-900 hover:text-black
	rounded mx-auto mt-5">{$startedTuning ? 'Stop' : 'Start'} Tuning!</Button
	>

	{#if $startedTuning}
		<DisplayNote bind:isTuned />
	{/if}
</div>

<style>
	.tuned {
		border-color: var(--tuned) transparent transparent transparent !important;
	}

	.bottom_25 {
		bottom: 10rem;
	}

	.bottom_50 {
		bottom: -1rem;
	}
	.note {
		color: var(--tuner-color);
	}

	.note_negative_50 {
		left: 0px;
	}

	.note_negative_25 {
		left: -5px;
	}

	.note_positive_50 {
		left: 90%;
	}

	.note_positive_25 {
		right: 0;
	}

	.note_0 {
		left: 46%;
		bottom: 13rem;
	}

	.indicator {
		width: 10px;
		height: 160px;
		border-radius: 5px;
		left: 50%;
		bottom: 1rem;
		transform-origin: bottom;
	}

	.arc {
		width: 500px;
		height: 200px;
		border: solid 25px;
		border-color: var(--tuner-color) transparent transparent transparent;
		border-radius: 75%/300px 300px 0 0;
		margin-top: 2rem;
	}
</style>
