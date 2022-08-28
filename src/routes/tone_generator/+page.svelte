<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	const STARTING_FREQUENCY = 440;
	let TYPE = 'sine';
	$: frequency = STARTING_FREQUENCY;

	let selectedType: any;

	const playTone = (frequency = 300, duration = 1e3) => {
		const context = new AudioContext();
		const oscillator = context.createOscillator();
		oscillator.type = selectedType.text;
		oscillator.frequency.value = frequency;

		const g = context.createGain();
		oscillator.connect(g);
		g.connect(context.destination);
		oscillator.start(0);

		setTimeout(() => {
			g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04);
			// oscillator.stop()
		}, duration);
	};

	let values = [STARTING_FREQUENCY];

	const onChangeFreq = (e) => {
		frequency = e.detail.value;
		console.log('changed', e.detail, ' frequency', frequency);
	};

	let types = [{ text: 'sine' }, { text: 'square' }, { text: 'sawtooth' }, { text: 'triangle' }];
</script>

<div class="w-3/4">
	<RangeSlider
		bind:values
		all="label"
		float={false}
		min={0}
		max={20154}
		hoverable
		on:change={onChangeFreq}
	/>
</div>
<div>{frequency} Hz</div>

<select
	bind:value={selectedType}
	on:change={(e) => {
		console.log('e', e);
	}}
>
	{#each types as type}
		<option value={type} selected={type.text === 'sine'}>
			{type.text}
		</option>
	{/each}
</select>

{JSON.stringify(selectedType)}

<button on:click={() => playTone(frequency)}>Play!</button>
