<script>
	import H2 from './H2.svelte';
	import H3 from './H3.svelte';
	import P from './P.svelte';
	import Link from './Link.svelte';
</script>

<div>
	<div class="text-center border-b-2 mt-5 text-red-900 text-2xl p-2">Useful Tunings</div>
	<div class="text-right text-xs pt-2 text-red-900">
		Each tuning is referring to open strings.
		<Link
			url="https://en.wikipedia.org/wiki/Musical_tuning"
			description="More Info"
			target="_blank"
			className="p-0  hover:text-red-400"
		/>
	</div>

	<div class="grid grid-rows-2 grid-cols-2 gap-y-0 justify-between items-center">
		<div class="text-center text-red-900 border-b-2 text-2xl p-2">Instrument</div>
		<div class="text-center text-red-900 border-b-2 text-2xl p-2">Tuning</div>

		<div class="text-center border-b-2 p-2">
			Viola, cello, tenor banjo, mandola, mandocello, tenor guitar
		</div>
		<div class="text-center border-b-2 pb-10">C, G, D, A</div>

		<div class="text-center border-b-2 p-2">Double bass, mando-bass, bass guitar*</div>
		<div class="text-center border-b-2 p-2">(B*,) E, A, D, G, (C*)</div>

		<div class="text-center border-b-2 p-2">Guitar</div>
		<div class="text-center border-b-2 p-2">E, A, D, G, B, E</div>

		<div class="text-center border-b-2 p-2">Cretan Lyra</div>
		<div class="text-center border-b-2 p-2">G, D, A</div>

		<div class="text-center border-b-2 p-2">Violin, Mandolin, Lute</div>
		<div class="text-center border-b-2 p-2">G, D, A, E</div>

		<div class="text-center border-b-2 p-2">Pontic Lyra</div>
		<div class="text-center border-b-2 p-2">B, E, A</div>

		<div class="text-center">Arabic oud</div>
		<div class="text-center">F, A, D, G, C, F</div>

		<div class="text-center">Turkish oud</div>
		<div class="text-center">D, F#, B, E, A, D</div>
	</div>
</div>
