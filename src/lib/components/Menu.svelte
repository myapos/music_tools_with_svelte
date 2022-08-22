<script lang="ts">
	import Link from './Link.svelte';
</script>

<nav class="flex justify-between p-5 bg-blue-600 text-blue-200 w-full">
	<Link url="/" description="E-tuner" />
	<Link url="/metronome" description="Metronome" />
	<Link url="/tone_giver" description="Tone Giver" />
	<Link url="/manual" description="Manual" />
	<Link url="/links" description="Links" />
	<Link url="/terms" description="Terms Of Use" />
	<Link url="/about" description="About" />
</nav>

<style>
</style>
