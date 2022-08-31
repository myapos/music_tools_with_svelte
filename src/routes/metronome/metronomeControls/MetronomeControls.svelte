<script lang="ts">
	import { Howl } from 'howler';
	import Timer from '$lib/utils/Timer';
	import { tempo, metronomeIsPlaying } from '$lib/stores/stores';
	import strongMp3 from '$lib/assets/strong.mp3';
	import weakMp3 from '$lib/assets/weak.mp3';

	import RangeSlider from 'svelte-range-slider-pips';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidStop from 'svelte-icons-pack/fa/FaSolidStop';
	import ControlBtn from './ControlBtn.svelte';

	const MIN_RANGE_TEMPO = 20;
	const MAX_RANGE_TEMPO = 240;

	const isValidTempo = (tempo: number) => {
		return tempo >= MIN_RANGE_TEMPO && tempo <= MAX_RANGE_TEMPO;
	};

	$: rangeValues = [$tempo];

	$: timer = new Timer({
		// tempo: $tempo,
		tempo: speed,
		callback: () => {
			console.log('will be called every ', speed / 1000, 'secs');
			strong.play();
		}
	});

	$: onChangeTempo = (e) => {
		tempo.update(() => e.detail.value);
		timer.stop();
		metronomeIsPlaying.update((prev) => {
			return false;
		});
	};

	const strong = new Howl({
		src: [strongMp3]
	});

	const weak = new Howl({
		src: [weakMp3]
	});

	$: speed = 60000 / $tempo;

	$: console.log('speed', speed);
</script>

<div class="grid grid-rows-2 grid-cols-3 gap-y-0">
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			onClick={() => {
				tempo.update((prev) => {
					const newTempo = prev - 1;
					if (isValidTempo(newTempo)) {
						return newTempo;
					}

					return prev;
				});
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
				tempo.update((prev) => {
					const newTempo = prev + 1;
					if (isValidTempo(newTempo)) {
						return newTempo;
					}

					return prev;
				});
			}}
			className="text-yellow-600 text-5xl hover:text-white">+</ControlBtn
		>
	</div>
	<div class="col-span-full mx-auto">
		<ControlBtn
			onClick={() => {
				console.log('stop/playing');
				if ($metronomeIsPlaying) {
					timer.stop();
				} else {
					timer.start();
				}
				metronomeIsPlaying.update((prev) => {
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

<style>
</style>
