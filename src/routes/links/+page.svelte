<script>
	import usefulLinks from '$lib/constants/usefulLinks';
	import H3 from '$lib/components/H3.svelte';
	import P from '$lib/components/P.svelte';
	import Link from '$lib/components/Link.svelte';

	let numOfLinks = Object.keys(usefulLinks).length;
</script>

<section class="text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl">
	<H3>Useful links</H3>
	<P>Here you can find some useful links and articles that I used in order to build these tools</P>

	<hr class="mt-2 border-1 border-red-900" />
	<P>
		<ul class="list-disc list-inside marker:text-red-900">
			{#each usefulLinks as link, index}
				<li class={`${index === numOfLinks - 1 ? 'mb-[546px]' : ''}`}>
					<Link
						url={link.url}
						target="_blank"
						description={link.description}
						className="md:text-2xl"
					/>
				</li>
			{/each}
		</ul>
	</P>
</section>
