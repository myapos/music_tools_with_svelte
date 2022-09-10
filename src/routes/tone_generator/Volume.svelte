<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	export let gain: { [key: string]: any } = {};
	export let volumePosition: number;
	export let timeoutId: number;
	export let handleTimeout: Function;
	import { DEFAULT_TIMEOUT_DURATION } from '$lib/constants/values';

	const handleTimeoutWrapper = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
	};

	const MIN_VOLUME = 0;
	const MAX_VOLUME = 1;
	$: rangeVolume = [volumePosition];

	const onChangeVolume = (e: any) => {
		const { value } = e.detail;
		if (gain) {
			gain.gain.value = value;
		}

		volumePosition = value;

		handleTimeoutWrapper();
	};
</script>

<RangeSlider
	bind:values={rangeVolume}
	float={false}
	range={true}
	hoverable
	on:change={onChangeVolume}
	step={0.0001}
	min={MIN_VOLUME}
	max={MAX_VOLUME}
/>
