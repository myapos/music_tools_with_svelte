<script lang="ts">
	import Volume from './Volume.svelte';
	import Select from 'svelte-select';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoArrowBackOutline from 'svelte-icons-pack/io/IoArrowBackOutline';
	import IoArrowForward from 'svelte-icons-pack/io/IoArrowForward';
	import { hashNotesFreq } from '$lib/audio/constants';

	export let frequency: number;
	export let min: number;
	export let max: number;
	export let selectedType: Object;
	export let gain: { [key: string]: any };

	let intervalRightId: any;
	let intervalLeftId: any;
	const MINIMUM_THRESHOLD_FOR_HOLDING = 150;
	let displayInput = false;

	let items = [
		{ value: 'sine', label: 'Sine' },
		{ value: 'square', label: 'Square' },
		{ value: 'sawtooth', label: 'Sawtooth' },
		{ value: 'triangle', label: 'Triangle' }
	];

	const handleLeftClick = () => {
		frequency--;
	};

	const handleLeftMouseDown = () => {
		intervalLeftId = setInterval(() => {
			frequency--;
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleLeftMouseUp = () => {
		clearInterval(intervalLeftId);
	};

	const handleRightMouseClick = () => {
		frequency++;
	};

	const handleRightMouseDown = () => {
		intervalRightId = setInterval(() => {
			frequency++;
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleRightMouseUp = () => {
		clearInterval(intervalRightId);
	};

	const enableDisplayInput = () => {
		displayInput = true;
	};

	const disableDisplayInput = () => {
		displayInput = false;
	};

	const disableDisplayInputOnEnter = (e: any) => {
		if (e.key.match(/enter/gi)) {
			disableDisplayInput();
		}
	};

	const handleSelectType = (event: any) => {
		selectedType = event.detail;
	};

	const itemsHashNotes = Object.keys(hashNotesFreq).map((note) => {
		return {
			value: hashNotesFreq[note],
			label: note
		};
	});

	let selectedFreq: any = { value: '440', label: 'A4' };

	const handleSelectFreq = (event: any) => {
		const hasValue = typeof event.detail.value !== 'undefined';
		const { value } = event.detail;

		if (hasValue) {
			selectedFreq = event.detail;
			frequency = parseInt(value);
		}
	};
</script>

<div class="w-full">
	<Volume bind:gain />
</div>

<div class="flex flex-row justify-center items-center w-2/5">
	<Select
		containerClasses="w-3/5 p-5 rounded"
		items={itemsHashNotes}
		bind:value={selectedFreq}
		on:select={handleSelectFreq}
		placeholder="Search notes"
	/>
	<div on:click={handleLeftClick} on:mousedown={handleLeftMouseDown} on:mouseup={handleLeftMouseUp}>
		<Icon
			src={IoArrowBackOutline}
			size="2rem"
			color="var(--tuner-color)"
			title="decrease frequency"
			className="cursor-pointer hover:brightness-150"
		/>
	</div>

	<div
		class="text-tuner-color w-2/5 text-xl text-center p-2 rounded mx-auto cursor-pointer"
		on:dblclick={enableDisplayInput}
	>
		{#if displayInput}<input
				type="number"
				{min}
				{max}
				bind:value={frequency}
				on:keypress={disableDisplayInputOnEnter}
				on:blur={disableDisplayInput}
			/>{:else}
			{frequency} Hz
		{/if}
	</div>

	<div
		on:click={handleRightMouseClick}
		on:mousedown={handleRightMouseDown}
		on:mouseup={handleRightMouseUp}
	>
		<Icon
			src={IoArrowForward}
			size="2rem"
			color="var(--tuner-color)"
			title="increase frequency"
			className="cursor-pointer hover:brightness-150"
		/>
	</div>

	<Select
		containerClasses="w-3/5 p-5 rounded"
		{items}
		bind:value={selectedType}
		on:select={handleSelectType}
		placeholder="Select type"
	/>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
