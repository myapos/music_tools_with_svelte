<script>
	import Link from './Link.svelte';
</script>

<nav class="flex justify-between p-5 bg-blue-600 text-blue-200 w-full">
	<Link target="/" description="E-tuner" />
	<Link target="/metronome" description="Metronome" />
	<Link target="/tone_giver" description="Tone Giver" />
	<Link target="/manual" description="Manual" />
	<Link target="/links" description="Links" />
	<Link target="/terms" description="Terms Of Use" />
	<Link target="/about" description="About" />
</nav>

<style>
</style>
