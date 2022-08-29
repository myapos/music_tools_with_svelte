<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	export let gain: { [key: string]: any };
	export let volumePosition: number;

	const MIN_VOLUME = 0;
	const MAX_VOLUME = 1;
	$: rangeVolume = [volumePosition];

	const onChangeVolume = (e: any) => {
		const { value } = e.detail;
		if (gain) {
			gain.gain.value = value;
		}

		volumePosition = value;
	};
</script>

<div
	class="text-tuner-color 
    w-2/5 
    text-xl 
    text-center 
    p-2 
    rounded 
    mx-auto
    "
>
	Volume {100 * volumePosition} %
</div>
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
