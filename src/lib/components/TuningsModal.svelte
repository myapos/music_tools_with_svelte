<script>
	import H2 from './H2.svelte';
	import H3 from './H3.svelte';
	import P from './P.svelte';
	import Link from './Link.svelte';
</script>

<div>
	<H2 className="text-center border-b-2 mt-5">Useful Tunings</H2>
	<div class="text-right text-xs pt-2 text-red-900">
		Each tuning is referring to open strings.
		<Link
			url="https://en.wikipedia.org/wiki/Musical_tuning"
			description="More Info"
			target="_blank"
			className="p-0  hover:text-red-400"
		/>
	</div>

	<!-- https://en.wikipedia.org/wiki/Musical_tuning -->
	<div class="grid grid-rows-2 grid-cols-2 gap-y-0 justify-between items-center">
		<H3 className="text-center">Instrument</H3>
		<H3 className="text-center">Tuning</H3>

		<P className="text-center border-b-2"
			>Viola, cello, tenor banjo, mandola, mandocello, tenor guitar</P
		>
		<P className="text-center border-b-2 pb-6">C, G, D, A</P>

		<P className="text-center border-b-2">Double bass, mando-bass, bass guitar*</P>
		<P className="text-center border-b-2 pb-6">(B*,) E, A, D, G, (C*)</P>

		<P className="text-center border-b-2">Guitar</P>
		<P className="text-center border-b-2">E, A, D, G, B, E</P>

		<P className="text-center border-b-2">Cretan Lyra</P>
		<P className="text-center border-b-2">G, D, A</P>

		<P className="text-center border-b-2">Violin, Mandolin, Lute</P>
		<P className="text-center border-b-2">G, D, A, E</P>

		<P className="text-center border-b-2">Turkish oud</P>
		<P className="text-center border-b-2">D, F#, B, E, A, D</P>

		<P className="text-center border-b-2">Arabic oud</P>
		<P className="text-center border-b-2">F, A, D, G, C, F</P>

		<P className="text-center">Pontic Lyra</P>
		<P className="text-center">B, E, A</P>
	</div>
</div>
