<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoArrowBackOutline from 'svelte-icons-pack/io/IoArrowBackOutline';
	import IoArrowForward from 'svelte-icons-pack/io/IoArrowForward';
	export let frequency: number;

	let intervalRightId: any;
	let intervalLeftId: any;
	const MINIMUM_THRESHOLD_FOR_HOLDING = 150;

	const handleLeftClick = () => {
		console.log('handle left');
		frequency--;
	};

	const handleLeftMouseDown = () => {
		intervalLeftId = setInterval(() => {
			console.log('decreasing');
			frequency--;
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleLeftMouseUp = () => {
		console.log('handle handleLeftMouseUp');
		clearInterval(intervalLeftId);
	};

	const handleRightMouseClick = () => {
		frequency++;
	};

	const handleRightMouseDown = () => {
		intervalRightId = setInterval(() => {
			console.log('increasing');
			frequency++;
		}, MINIMUM_THRESHOLD_FOR_HOLDING);
	};

	const handleRightMouseUp = () => {
		console.log('handle handleRightMouseUp');
		clearInterval(intervalRightId);
	};
</script>

<div class="flex flex-row justify-center items-center  w-1/5">
	<div on:click={handleLeftClick} on:mousedown={handleLeftMouseDown} on:mouseup={handleLeftMouseUp}>
		<Icon
			src={IoArrowBackOutline}
			size="2rem"
			color="var(--tuner-color)"
			title="decrease frequency"
			className="cursor-pointer hover:brightness-150"
		/>
	</div>

	<div class="text-tuner-color text-xl text-center p-2 rounded mx-auto">
		{frequency} Hz
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
