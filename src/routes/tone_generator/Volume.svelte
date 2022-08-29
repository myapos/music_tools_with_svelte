<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	export let gain: { [key: string]: any };

	const MIN_VOLUME = 0;
	const MAX_VOLUME = 1;
	$: volume = 0.5;
	$: rangeVolume = [volume];

	const onChangeVolume = (e: any) => {
		const { value } = e.detail;
		if (gain) {
			gain.gain.value = value;
		}
	};
</script>

<RangeSlider
	bind:values={rangeVolume}
	all="label"
	float={false}
	range={true}
	hoverable
	on:change={onChangeVolume}
	step={0.0001}
	min={MIN_VOLUME}
	max={MAX_VOLUME}
/>
