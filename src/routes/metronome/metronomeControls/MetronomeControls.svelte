<script>
	import PlayMetronomeBtn from './PlayMetronomeBtn.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidStop from 'svelte-icons-pack/fa/FaSolidStop';
	import ControlBtn from './ControlBtn.svelte';

	let isPlaying = true;
</script>

<div class="grid grid-rows-2 grid-cols-3 gap-y-0">
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			onClick={() => {
				console.log('decreasing');
			}}>-</ControlBtn
		>
	</div>
	<div class="text-center">slider</div>
	<div class="text-center flex flex-row justify-center">
		<ControlBtn
			onClick={() => {
				console.log('increasing');
			}}>+</ControlBtn
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
