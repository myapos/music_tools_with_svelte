<script lang="ts">
	import Link from './Link.svelte';
	import popularTunings from '$lib/constants/popularTunings';
	import InstrumentTuning from './InstrumentTuning.svelte';

	const tuningKeys = Object.keys(popularTunings);
</script>

<div>
	<div class="mt-5 border-b-2 p-2 text-center text-2xl text-red-900">Useful Tunings</div>
	<div class="pt-2 text-right text-xs text-red-900">
		Each tuning is referring to open strings.
		<Link
			url="https://en.wikipedia.org/wiki/Musical_tuning"
			description="More Info"
			target="_blank"
			className="p-0  hover:text-red-400" />
	</div>

	<div class="grid grid-cols-2 grid-rows-2 items-center justify-between gap-y-0">
		<div class="border-b-2 p-2 text-center text-2xl text-red-900">Instrument</div>
		<div class="border-b-2 p-2 text-center text-2xl text-red-900">Tuning</div>

		{#each tuningKeys as tuningKey, index}
			<InstrumentTuning
				descriptionClassName={index === tuningKeys.length - 1
					? 'text-center'
					: 'border-b-2 p-2 text-center'}
				toneClassName={index === 0
					? 'border-b-2 pb-10 text-center'
					: index === tuningKeys.length - 1
					? 'text-center'
					: 'border-b-2 p-2 text-center'}
				instrument={tuningKey}
				tone={popularTunings[tuningKey]} />
		{/each}
	</div>
</div>
