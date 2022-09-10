<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Howl } from 'howler';
	import Timer from '$lib/utils/Timer';
	import { tempo, metronomeIsPlaying, bpm } from '$lib/stores/stores';
	import H2 from '$lib/components/H2.svelte';
	import strongMp3 from '$lib/assets/strong.mp3';
	import weakMp3 from '$lib/assets/weak.mp3';

	import RangeSlider from 'svelte-range-slider-pips';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidStop from 'svelte-icons-pack/fa/FaSolidStop';
	import { DEFAULT_TIMEOUT_DURATION, MINIMUM_THRESHOLD_FOR_HOLDING } from '$lib/constants/values';
	import ControlBtn from './ControlBtn.svelte';

	const MIN_RANGE_TEMPO = 20;
	const MAX_RANGE_TEMPO = 240;
	const INITIALIZE_BEATS = 1;
	const RESET_BEATS = 0;

	const MIN_BPM = 1;
	const MAX_BPM = 9;
	let countBeats = INITIALIZE_BEATS;

	let timeoutId: number;

	const resetTimerToInitialState = (timer: Timer) => {
		if (timer && $metronomeIsPlaying) {
			timer.stop();
			countBeats = INITIALIZE_BEATS;
		}
	};

	const isValidTempo = (tempo: number) => {
		return tempo >= MIN_RANGE_TEMPO && tempo <= MAX_RANGE_TEMPO;
	};

	const isValidBpm = (bpm: number) => {
		return bpm >= MIN_BPM && bpm <= MAX_BPM;
	};

	const calculateSpeed = (tempo: number): number => parseInt(`${60000 / tempo}`);

	const strong = new Howl({
		src: [strongMp3]
	});

	const weak = new Howl({
		src: [weakMp3]
	});

	let initialSpeed = calculateSpeed($tempo);

	let timer: Timer = new Timer({
		speed: initialSpeed,
		callback: () => {
			if (countBeats === $bpm) {
				//! reset counter of beats
				countBeats = RESET_BEATS;
				weak.play();
			} else {
				strong.play();
			}

			countBeats++;
		},
		errorCallback: (self: any) => {
			console.error('error occured');
			self.stop();
		}
	});

	/* reactivity section */

	$: rangeValues = [$tempo];
	//! on reseting tempo

	const onChangeTempo = (e) => {
		const newTempo = e.detail.value;

		if (isValidTempo(newTempo)) {
			tempo.update(() => newTempo);
			timer.updateSpeed(calculateSpeed(newTempo));
		}
	};

	onDestroy(() => {
		resetTimerToInitialState(timer);
	});

	const onClickBtn = ({ mode }: { mode: string }) => {
		if (mode === '-') {
			tempo.update((prev) => {
				const newTempo = prev - 1;
				if (isValidTempo(newTempo)) {
					timer.updateSpeed(calculateSpeed(newTempo));
					return newTempo;
				}

				return prev;
			});
		}

		if (mode === '+') {
			tempo.update((prev) => {
				const newTempo = prev + 1;
				if (isValidTempo(newTempo)) {
					timer.updateSpeed(calculateSpeed(newTempo));
					return newTempo;
				}

				return prev;
			});
		}
	};

	const handleDecreaseMouseDown = ({ mode }: { mode: string }) => {
		console.log('decrease mouse down');

		timeoutId = setInterval(() => {
			if (mode === '-') {
				tempo.update((prev) => {
					const newTempo = prev - 1;
					if (isValidTempo(newTempo)) {
						timer.updateSpeed(calculateSpeed(newTempo));
						return newTempo;
					}

					return prev;
				});
			}

			if (mode === '+') {
				tempo.update((prev) => {
					const newTempo = prev + 1;
					if (isValidTempo(newTempo)) {
						timer.updateSpeed(calculateSpeed(newTempo));
						return newTempo;
					}

					return prev;
				});
			}
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleDecreaseMouseUp = () => {
		clearInterval(timeoutId);
	};
</script>

<div class="grid grid-rows-2 grid-cols-3 gap-y-0">
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			handleDecreaseMouseDown={() => handleDecreaseMouseDown({ mode: '-' })}
			{handleDecreaseMouseUp}
			onClick={() => {
				onClickBtn({ mode: '-' });
			}}
			className="text-yellow-600 text-5xl hover:text-white">-</ControlBtn
		>
	</div>
	<div class="text-center">
		<RangeSlider
			bind:values={rangeValues}
			float={false}
			range={true}
			min={MIN_RANGE_TEMPO}
			max={MAX_RANGE_TEMPO}
			hoverable
			on:change={onChangeTempo}
			id="tempo_slider"
		/>
	</div>
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			onClick={() => {
				onClickBtn({ mode: '+' });
			}}
			handleDecreaseMouseDown={() => handleDecreaseMouseDown({ mode: '+' })}
			{handleDecreaseMouseUp}
			className="text-yellow-600 text-5xl hover:text-white">+</ControlBtn
		>
	</div>
	<div class="col-span-full mx-auto">
		<ControlBtn
			onClick={() => {
				if ($metronomeIsPlaying) {
					resetTimerToInitialState(timer);
				} else {
					timer.start();
				}
				metronomeIsPlaying.update((prev) => {
					timer.isPlaying = !timer.isPlaying;
					return !prev;
				});
			}}
			>{#if !$metronomeIsPlaying}
				<Icon src={FaSolidPlay} size="1.3rem" color="var(--tuned)" title="play" />
			{:else}
				<Icon src={FaSolidStop} size="1.3rem" color="var(--tuned)" title="stop" />
			{/if}</ControlBtn
		>
	</div>
</div>
<H2 className="text-center mt-5">Beat emphasis</H2>
<div class="beat_management flex flex-row justify-center">
	<div class="text-center flex flex-row justify-center p-5">
		<ControlBtn
			onClick={() => {
				bpm.update((prev) => {
					const newBpm = prev - 1;
					if (isValidBpm(newBpm)) {
						//! reset beats
						countBeats = INITIALIZE_BEATS;
						return newBpm;
					}
					return prev;
				});
			}}
			className="text-yellow-600 text-2xl hover:text-white w-8 h-8">-</ControlBtn
		>
	</div>
	<div class="text-xl text-red-900">{$bpm}</div>
	<div class="text-center flex flex-row justify-center p-5">
		<ControlBtn
			onClick={() => {
				bpm.update((prev) => {
					const newBpm = prev + 1;
					if (isValidBpm(newBpm)) {
						//! reset beats
						countBeats = INITIALIZE_BEATS;
						return newBpm;
					}
					return prev;
				});
			}}
			className="text-yellow-600 text-2xl hover:text-white w-8 h-8">+</ControlBtn
		>
	</div>
</div>

<style>
</style>
