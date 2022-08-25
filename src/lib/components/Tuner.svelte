<script>
	import audio from '$lib/audio/audio';
	import { stateAudioContext } from '$lib/stores/stores';
	import DisplayNote from './DisplayNote.svelte';
	let note_negative_50 = '-50Hz';
	let note_negative_25 = '-25Hz';
	let note_0 = '0Hz';
	let note_positive_25 = '25Hz';
	let note_positive_50 = '50Hz';
	let startedTuning = false;

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
</script>

<div>
	<div class="relative flex flex-col">
		<div class="arc" />
		<div class="indicator absolute bg-tuner-color" />
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
		<DisplayNote />
	{/if}
</div>

<style>
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
		height: 180px;
		border-radius: 5px;
		left: 46%;
		bottom: 1rem;
		transform: rotate(35deg);
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
