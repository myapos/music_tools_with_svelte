<script>
	import { stateNoteInfo } from '$lib/stores/stores';

	$: hasNote = typeof $stateNoteInfo.note === 'undefined';
</script>

<div
	class="text-tuner-color text-xl text-center w-2/5 p-2 bg-black rounded 
mx-auto mt-5"
>
	{hasNote ? 'Not detected' : $stateNoteInfo.note}
</div>

<style>
</style>
