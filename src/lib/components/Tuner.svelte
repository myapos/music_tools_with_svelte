<script>
	import audio from '$lib/audio/audio';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { stateNoteInfo } from '$lib/stores/stores';
	import { stateAudioContext } from '$lib/stores/stores';
	import DisplayNote from './DisplayNote.svelte';
	import { minimumThreshold } from '$lib/audio/constants';

	let note_negative_50 = '-50Hz';
	let note_negative_25 = '-25Hz';
	let note_0 = '0Hz';
	let note_positive_25 = '25Hz';
	let note_positive_50 = '50Hz';
	let startedTuning = false;
	let tunedDeviation = 10; //! Hz

	let stopTuning = () => {
		if (startedTuning) {
			stateAudioContext.update((ctx) => {
				try {
					ctx.close();
					return ctx;
				} catch (e) {
					console.error('error', e);
				}
			});
		}
	};

	$: console.log('stateNoteInfo', $stateNoteInfo);

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

	$: console.log('degreesOffset', degreesOffset);
	$: isTuned = startedTuning && Math.abs(degreesOffset) < tunedDeviation;
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

	<div
		on:click={() => {
			if (startedTuning) {
				//! if it already started and click again stop tuning
				console.log('stop tuning');
				stopTuning();
			} else {
				//! start tuning
				console.log('start tuning');

				audio();
			}
			startedTuning = !startedTuning;
		}}
		class="start text-xl text-center text-tuner-color cursor-pointer
		 w-2/5 p-2 bg-black hover:bg-red-900 hover:text-black
		 rounded mx-auto mt-5"
	>
		{startedTuning ? 'Stop' : 'Start'} Tuning!
	</div>

	{#if startedTuning}
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
