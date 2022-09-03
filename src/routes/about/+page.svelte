<script lang="ts">
	import H3 from '$lib/components/H3.svelte';
	import P from '$lib/components/P.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<section class="text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl">
	<H3>A few words</H3>

	<P
		>In these pages you can find a collection of tools that are useful for musicians. The tools that
		you can find are constituted of the following
		<ul class="list-disc list-inside marker:text-red-900">
			<li>Tuner</li>
			<li>Tone generator</li>
			<li>Metronome</li>
		</ul>
		<H3>Technical details</H3>
		The whole project is built with the
		<Link
			url="https://svelte.dev/"
			description="svelte"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>
		framework and the <Link
			url="https://kit.svelte.dev/"
			description="SvelteKit"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>. Here you can find more information about the implementation approach that I followed in
		order to implement this collection of tools.

		<H3>Tuner</H3>
		For the detection of pitch I used the algorithm of <Link
			url="http://mroy.chez-alice.fr/yin/index.html"
			description="YIN"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> and the <Link
			url="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
			description="Web Audio API "
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>
		in Javascript

		<H3>Tone generator</H3>
		For the implementation of the tone genarator I used the <Link
			url="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
			description="Web Audio API"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> in Javascript

		<H3>Metronome</H3>

		For the implementation of the metronme I used a custom implementation of a precise timer.
		Internally it uses the <Link
			url="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
			description="setTimeout"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> funciton of Javascript with autocorrection of the native drift in order to keep the tempo steady.
	</P>

	<H3>Github repo</H3>

	<P>
		You can find the code of the whole project <Link
			url="https://github.com/myapos/music_tools_with_svelte"
			description="here"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>
	</P>

	<H3>About me</H3>
	<P className="mb-48">
		You can find some information about me in my personal site <Link
			url="https://myapos.oncrete.gr/"
			description="here"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> and in my <Link
			url="https://codebitshub.com/"
			description="blog"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>
	</P>
</section>
