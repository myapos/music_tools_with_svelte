<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoArrowBackOutline from 'svelte-icons-pack/io/IoArrowBackOutline';
	import IoArrowForward from 'svelte-icons-pack/io/IoArrowForward';
	import {
		frequency,
		MIN_RANGE_FREQ,
		MAX_RANGE_FREQ,
		sliderPos,
		logarithmicScale
	} from '$lib/stores/stores';
	import { DEFAULT_TIMEOUT_DURATION, MINIMUM_THRESHOLD_FOR_HOLDING } from '$lib/constants/values';
	export let oscillatorRef: { [key: string]: any } = {};

	export let timeoutId: number;
	export let handleTimeout: Function;

	let intervalRightId: any;
	let intervalLeftId: any;
	let displayInput = false;

	const handleTimeoutWrapper = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
	};

	const handleLeftClick = () => {
		frequency.update((prev) => {
			return prev - 1;
		});

		sliderPos.update((prev) => {
			return $logarithmicScale.position($frequency);
		});

		const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
		if (oscillatorIsIntialized) {
			oscillatorRef.frequency.value = $frequency;
		}

		handleTimeoutWrapper();
	};

	const handleLeftMouseDown = () => {
		if (intervalLeftId) {
			clearInterval(intervalLeftId);
		}
		if (intervalRightId) {
			clearInterval(intervalRightId);
		}

		intervalLeftId = setInterval(() => {
			frequency.update((prev) => {
				return prev - 1;
			});
			handleTimeoutWrapper();
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleLeftMouseUp = () => {
		console.log('mouse up');
		if (intervalLeftId) {
			clearInterval(intervalLeftId);
		}
		if (intervalRightId) {
			clearInterval(intervalRightId);
		}
	};

	const handleRightMouseClick = () => {
		frequency.update((prev) => {
			return prev + 1;
		});

		sliderPos.update((prev) => {
			return $logarithmicScale.position($frequency);
		});

		const oscillatorIsIntialized = oscillatorRef?.frequency?.value;
		if (oscillatorIsIntialized) {
			oscillatorRef.frequency.value = $frequency;
		}
		handleTimeoutWrapper();
	};

	const handleRightMouseDown = () => {
		if (intervalLeftId) {
			clearInterval(intervalLeftId);
		}
		if (intervalRightId) {
			clearInterval(intervalRightId);
		}

		intervalRightId = setInterval(() => {
			frequency.update((prev) => {
				return prev + 1;
			});
			handleTimeoutWrapper();
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleRightMouseUp = () => {
		if (intervalLeftId) {
			clearInterval(intervalLeftId);
		}
		if (intervalRightId) {
			clearInterval(intervalRightId);
		}
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

<div class="flex w-2/5 flex-row items-center justify-center">
	<div
		on:click={handleLeftClick}
		on:mousedown={handleLeftMouseDown}
		on:touchstart={handleLeftMouseDown}
		on:touchend={handleLeftMouseUp}
		on:mouseup={handleLeftMouseUp}>
		<Icon
			src={IoArrowBackOutline}
			size="2rem"
			color="var(--tuner-color)"
			title="decrease frequency"
			className="cursor-pointer hover:brightness-150" />
	</div>

	<div
		class="mx-auto w-3/5 cursor-pointer rounded text-center  text-xl text-tuner-color md:w-4/5"
		on:dblclick={enableDisplayInput}>
		{#if displayInput}<input
				type="number"
				min={MIN_RANGE_FREQ}
				max={MAX_RANGE_FREQ}
				bind:value={$frequency}
				on:keypress={disableDisplayInputOnEnter}
				on:blur={disableDisplayInput} />{:else}
			{$frequency} Hz
		{/if}
	</div>

	<div
		on:click={handleRightMouseClick}
		on:mousedown={handleRightMouseDown}
		on:mouseup={handleRightMouseUp}
		on:touchstart={handleRightMouseDown}
		on:touchend={handleRightMouseUp}>
		<Icon
			src={IoArrowForward}
			size="2rem"
			color="var(--tuner-color)"
			title="increase frequency"
			className="cursor-pointer hover:brightness-150" />
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
