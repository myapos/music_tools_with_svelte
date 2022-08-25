<script>
	import { onDestroy } from 'svelte';
	import { stateNoteInfo } from '$lib/stores/stores';
	let noteIsDetected = false;

	// const unsubscribe = count.stateNoteInfo((value) => {
	// 	noteIsDetected = stateNoteInfo.note.length > 0;
	// });

	// onDestroy(unsubscribe);

	// // console.log('stateNoteInfo', stateNoteInfo);
	// // $: noteToDisplay = 'N/A';

	// if (noteIsDetected) {
	// 	noteToDisplay = stateNoteInfo.note;
	// }
	// console.log('stateNoteInfo', stateNoteInfo);
</script>

<div
	class="text-tuner-color text-xl text-center w-2/5 p-2 bg-black rounded 
mx-auto mt-5"
>
	{typeof $stateNoteInfo.note === 'undefined' ? 'Not detected' : $stateNoteInfo.note}
</div>

<style>
</style>
