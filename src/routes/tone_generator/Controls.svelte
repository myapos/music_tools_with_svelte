<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoArrowBackOutline from 'svelte-icons-pack/io/IoArrowBackOutline';
	import IoArrowForward from 'svelte-icons-pack/io/IoArrowForward';
	export let frequency: number;

	const handleLeft = () => {
		console.log('handle left');
		frequency--;
	};

	const handleRight = () => {
		console.log('handle right');
		frequency++;
	};
</script>

<div class="flex flex-row justify-center items-center  w-1/5">
	<div on:click={handleLeft}>
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

	<div on:mousedown={handleRight}>
		<Icon
			src={IoArrowForward}
			size="2rem"
			color="var(--tuner-color)"
			title="increase frequency"
			className="cursor-pointer hover:brightness-150"
		/>
	</div>
</div>
