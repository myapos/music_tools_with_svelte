<script>
	import Tuner from '$lib/components/Tuner.svelte';
</script>

<h1 class="text-2xl">Instrument tuner</h1>

<section
	class="tuner md:text-xl md:text-justify md:tracking-wide bg-red-900 w-full flex justify-center relative"
>
	<Tuner />
</section>

<section class="md:text-xl md:text-justify md:tracking-wide">
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
	the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
	type and scrambled it to make a type specimen book. It has survived not only five centuries, but
	also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
	the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
	with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</section>

<style>
	.tuner {
		background-color: var(--background-black-red);
		min-height: 300px;
	}

	section {
		padding: 1rem;
	}

	section {
		overflow-y: scroll;
		padding: 1rem;
	}
</style>
