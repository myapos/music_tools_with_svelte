<script>
	import { tempo } from '$lib/stores/stores';
	import findTempoMarking from '$lib/utils/findTempoMarking';

	$: marking = findTempoMarking($tempo);
</script>

<div
	class="
        flex
        items-center
        justify-center
        text-tuner-color 
        text-center
        border-4
        w-64
        h-64
        mx-auto
        border-red-900
        bpm"
>
	<div class="flex flex-col">
		<div class="text-2xl">BPM</div>
		<div class="text-6xl">
			{$tempo}
		</div>
		<div class="text-2xl">{marking}</div>
	</div>
</div>

<style>
	.bpm {
		border-radius: 50%;
	}
</style>
