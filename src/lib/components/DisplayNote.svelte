<script>
	import { stateNoteInfo } from '$lib/stores/stores';

	export let isTuned;
	$: hasNote = typeof $stateNoteInfo.note === 'undefined';
</script>

<div
	class="text-tuner-color text-xl text-center w-2/5 p-2 rounded mx-auto mt-5"
	class:text-tuned={isTuned}
>
	{hasNote ? 'Not detected' : $stateNoteInfo.note}
</div>

<style>
</style>
