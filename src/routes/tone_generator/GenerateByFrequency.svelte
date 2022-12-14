<script lang="ts">
	import { onDestroy, getContext, onMount } from 'svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import SearchNotes from './SearchNotes.svelte';
	import WaveType from './WaveType.svelte';
	import Volume from './Volume.svelte';
	import Button from '$lib/components/Button.svelte';
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';
	import {
		MIN_RANGE_FREQ,
		MAX_RANGE_FREQ,
		frequency,
		sliderPos,
		logarithmicScale,
		startingPos,
		STARTING_FREQ
	} from '$lib/stores/stores';
	import StepControls from './StepControls.svelte';
	import Popup from '$lib/components/Popup.svelte';

	const { open }: any = getContext('simple-modal');
	const showPopup = ({ message }: { message: string }) => {
		return open(Popup, { message });
	};

	$: isPlaying = false;

	let frequencyValue: number;
	let oscillatorRef: any;
	const unsubscribe = frequency.subscribe((value) => {
		frequencyValue = value;
	});

	//! globals for contenxt
	let gain: { [key: string]: any };
	let audioContext: { [key: string]: any };
	let timeoutId: number;
	//! initial volume setting
	let volumePosition: number = 0.1;

	//! initial value of select
	let selectedType = { value: 'sine', label: 'Sine' };

	const stop = ({ g, context }: any) => {
		isPlaying = false;
		g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04);

		if (audioContext.state === 'running') {
			audioContext.close();
		}
		clearTimeout(timeoutId);
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
			oscillator.frequency.value = frequencyValue;

			oscillatorRef = oscillator;
			oscillator.start(0);

			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
			isPlaying = true;
		}
	};

	const onChangeFreq = (e) => {
		const freq = e.detail.value;

		const val = parseInt($logarithmicScale.value(freq));

		sliderPos.update((prev) => {
			return $logarithmicScale.position(val);
		});

		frequency.update((prev) => {
			const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
			if (oscillatorIsIntialized) {
				oscillatorRef.frequency.value = val;
			}
			return val;
		});

		//! update time out on frequency changes

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
	};

	onDestroy(() => {
		if (isPlaying) {
			stop({ g: gain, context: audioContext });
		}
		unsubscribe();
	});

	onMount(() => {
		frequency.update((prev) => {
			return STARTING_FREQ;
		});
		sliderPos.update((prev) => {
			return startingPos;
		});
	});
	$: rangeValues = [$sliderPos];
</script>

<div>
	<div class="mx-auto w-2/5 rounded p-2 text-center text-xl text-tuner-color">
		Frequency selector
	</div>
	<RangeSlider
		bind:values={rangeValues}
		min={MIN_RANGE_FREQ}
		max={MAX_RANGE_FREQ}
		hoverable
		on:change={onChangeFreq}
		springValues={{
			stiffness: 0.1,
			damping: 0.9
		}} />
	<div class="grid grid-cols-4 grid-rows-2 items-end justify-center gap-y-0 text-tuner-color">
		<div class="text-center">Volume {parseInt((100 * volumePosition).toFixed())} %</div>
		<div class="text-center">Search Notes</div>
		<div class="text-center">Step Controls</div>
		<div class="text-center">Wave Shape</div>
		<!--end of first row-->
		<div class="mb-o flex flex-col content-end">
			<Volume bind:gain bind:volumePosition bind:timeoutId {handleTimeout} />
		</div>
		<div class="flex justify-center">
			<SearchNotes {oscillatorRef} bind:timeoutId {handleTimeout} />
		</div>
		<div class="flex justify-center">
			<StepControls bind:timeoutId {handleTimeout} {oscillatorRef} />
		</div>
		<div class="flex justify-center">
			<WaveType
				bind:selectedType
				bind:oscillatorRef
				bind:volumePosition
				bind:timeoutId
				{handleTimeout} />
		</div>
	</div>
	<div class="justify-centers mx-auto flex w-1/2 flex-col items-center">
		<Button
			onClick={() => handleGenerator($frequency)}
			className="text-xl text-center text-tuner-color cursor-pointer w-2/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5"
			>{isPlaying ? 'Stop' : 'Play'}!
		</Button>
	</div>
</div>
