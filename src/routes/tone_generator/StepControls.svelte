<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoArrowBackOutline from 'svelte-icons-pack/io/IoArrowBackOutline';
	import IoArrowForward from 'svelte-icons-pack/io/IoArrowForward';
	import { frequency, MIN_RANGE_FREQ, MAX_RANGE_FREQ } from '$lib/stores/stores';

	let intervalRightId: any;
	let intervalLeftId: any;
	const MINIMUM_THRESHOLD_FOR_HOLDING = 150;
	let displayInput = false;

	const handleLeftClick = () => {
		frequency.update((prev) => {
			return prev - 1;
		});
	};

	const handleLeftMouseDown = () => {
		intervalLeftId = setInterval(() => {
			frequency.update((prev) => {
				return prev - 1;
			});
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleLeftMouseUp = () => {
		clearInterval(intervalLeftId);
	};

	const handleRightMouseClick = () => {
		frequency.update((prev) => {
			return prev + 1;
		});
	};

	const handleRightMouseDown = () => {
		intervalRightId = setInterval(() => {
			frequency.update((prev) => {
				return prev + 1;
			});
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
</script>

<div class="flex flex-row justify-center items-center w-2/5">
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
		class="text-tuner-color w-3/5 md:w-4/5 text-xl text-center  rounded mx-auto cursor-pointer"
		on:dblclick={enableDisplayInput}
	>
		{#if displayInput}<input
				type="number"
				min={MIN_RANGE_FREQ}
				max={MAX_RANGE_FREQ}
				bind:value={$frequency}
				on:keypress={disableDisplayInputOnEnter}
				on:blur={disableDisplayInput}
			/>{:else}
			{$frequency} Hz
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
