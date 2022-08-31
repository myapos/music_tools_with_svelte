<script>
	import { tempo } from '$lib/stores/stores';
	import RangeSlider from 'svelte-range-slider-pips';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidStop from 'svelte-icons-pack/fa/FaSolidStop';
	import ControlBtn from './ControlBtn.svelte';

	let isPlaying = true;
	const MIN_RANGE_TEMPO = 20;
	const MAX_RANGE_TEMPO = 240;

	$: rangeValues = [$tempo];

	const onChangeTempo = (e) => {
		tempo.update(() => e.detail.value);
	};
</script>

<div class="grid grid-rows-2 grid-cols-3 gap-y-0">
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			onClick={() => {
				console.log('decreasing');
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
				console.log('increasing');
			}}
			className="text-yellow-600 text-5xl hover:text-white">+</ControlBtn
		>
	</div>
	<div class="col-span-full mx-auto">
		<ControlBtn
			onClick={() => {
				console.log('stop/playing');
			}}
			>{#if !isPlaying}
				<Icon src={FaSolidPlay} size="1.3rem" color="var(--tuned)" title="play" />
			{:else}
				<Icon src={FaSolidStop} size="1.3rem" color="var(--tuned)" title="stop" />
			{/if}</ControlBtn
		>
	</div>
</div>

<style>
</style>
