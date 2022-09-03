<script lang="ts">
	import H1 from '$lib/components/H1.svelte';

	import H2 from '$lib/components/H2.svelte';
	import H3 from '$lib/components/H3.svelte';
	import P from '$lib/components/P.svelte';
	import Link from '$lib/components/Link.svelte';
	import Bpm from './Bpm.svelte';
	import MetronomeControls from './metronomeControls/MetronomeControls.svelte';

	const h1ExtraClasses = 'p-8';
	const h2ExtraClasses = 'py-2';
</script>

<H1 className={h1ExtraClasses}>Metronome</H1>
<section
	class="
	tools 
	md:text-xl 
	md:text-justify 
	md:tracking-wide
    bg-red-900 
	w-full 
	flex 
	flex-col 
	justify-center 
	relative 
	p-8"
>
	<Bpm />
</section>

<section class="text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl">
	<MetronomeControls />

	<H2 className={h2ExtraClasses}>What is a metronome?</H2>
	<P>
		A <Link
			url="https://en.wikipedia.org/wiki/Metronome"
			description="metronome"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> from ancient Greek μέτρον (métron, "measure") and νομός (nomós, "custom", "melody") is a device
		that produces an audible click or other sound at a regular interval that can be set by the user,
		typically in beats per minute (BPM). Metronomes may include synchronized visual motion. Musicians
		use the device to practise playing to a regular pulse.

		<P>
			A kind of metronome was among the inventions of Andalusian polymath Abbas ibn Firnas
			(810–887). In 1815, German inventor Johann Maelzel patented his mechanical, wind-up metronome
			as a tool for musicians, under the title "Instrument/Machine for the Improvement of all
			Musical Performance, called Metronome". In the 20th century, electronic metronomes and
			software metronomes were invented
		</P>
	</P>
	<H2 className={h2ExtraClasses}>How to use this metronome?</H2>

	<P>
		<H3>General Use</H3>
		You can control this metronome by using the plus/minus signs or the slider to adjust the tempo and
		clicking Play. Clicking on the plus/minus sign or moving the slider to the right/left with increase/decrease
		the tempo.The metronome will use the tempo to generate two kind of sounds onew weak and one strong
		every BPM cycles. The number of BPM is controlled by the Beat emphasis and is explained below.

		<H3>Beat emphasis</H3>

		<P>
			You can use the plus/minus signs in order to increase/decrease the beat emphasis of the
			metronome. The beat emphasis is used to play different sounds according to the length of the
			metronome. You can use this option to control when a strong and a weak sound will be played.
			For example for a beat emphasis equal to 4 every 4 time cycles one weak sound will be played.
			So the scheme will be 3 strong sounds + 1 weak sound = 4 sounds in total. For beat emphasis
			value of two 1 strong sound + 1 weak sound = 2 sounds in total sound and so on.
		</P>

		<H3>Tempo Markings</H3>

		<P>
			A <Link
				url="https://courses.lumenlearning.com/suny-musicappreciationtheory/chapter/tempo-markings-and-changes/"
				description="tempo"
				target="_blank"
				className="p-0 text-red-900 hover:text-red-400"
			/> marking is a word or phrase that gives you the composer’s idea of how fast the music should
			feel. How fast a piece of music feels depends on several different things, including the texture
			and complexity of the music, how often the beat gets divided into faster notes, and how fast the
			beats themselves are (the metronome marking).
		</P>
		<P>
			Also, the same tempo marking can mean quite different things to different composers; if a
			metronome marking is not available, the performer should use a knowledge of the music’s style
			and genre, and musical common sense, to decide on the proper tempo. When possible, listening
			to a professional play the piece can help with tempo decisions, but it is also reasonable for
			different performers to prefer slightly different tempos for the same piece.
		</P>

		<H3>Common bpm range of tempo markings</H3>
		<P>
			<ul class="list-disc list-inside marker:text-red-900">
				<li>Grave - between 20 and 39 beats per minute</li>
				<li>Lento - between 40 and 45 beats per minute</li>
				<li>Largo - between 46 and 55 beats per minute</li>
				<li>Adagio - between 56 and 65 beats per minute</li>
				<li>Adagietto - between 66 and 70 beats per minute</li>
				<li>Andante Moderato - between 71 and 73 beats per minute</li>
				<li>Andante - between 74 and 78 beats per minute</li>
				<li>Andantino - between 79 and 83 beats per minute</li>
				<li>Marcia Moderato - between 84 and 85 beats per minute</li>
				<li>Moderato - between 86 and 95 beats per minute</li>
				<li>Allegretto - between 96 and 110 beats per minute</li>
				<li>Allegro Moderato - between 111 and 120 beats per minute</li>
				<li>Allegro - between 121 and 132 beats per minute</li>
				<li>Vivace - between 133 and 141 beats per minute</li>
				<li>Vivacissimmo - between 142 and 151 beats per minute</li>
				<li>Alegrissimmo - between 152 and 168 beats per minute</li>
				<li>Presto - between 169 and 200 beats per minute</li>
				<li>Prestissimo - between 201 and 240 beats per minute</li>
			</ul>
		</P>

		<H3>Tips on using a metronome</H3>
		<P
			>You can can find some useful tips on using a metronome <Link
				url="https://prodigies.com/blogs/music-teachers/tips-on-how-to-practice-with-a-metronome"
				description="here"
				target="_blank"
				className="p-0 text-red-900 hover:text-red-400"
			/>
		</P>
	</P>

	<H2 className={h2ExtraClasses}>Granting Microphone Access</H2>

	<P>
		This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome or Firefox browsers

		<H3
			><Link
				url="https://support.google.com/chrome/answer/2693767?hl=en-GB&co=GENIE.Platform%3DDesktop"
				description="Chrome"
				target="_blank"
				className="p-0 text-red-900 hover:text-red-400"
			/>
		</H3>
		<P>
			Go to Settings -> Site Settings -> Microphone and allow this site to access the microphone.
		</P>
		<H3>
			<Link
				url="https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions#w_use-prompts-to-allow-or-block-camera-and-microphone-permissions-for-a-site"
				description="Firefox"
				target="_blank"
				className="p-0 text-red-900 hover:text-red-400"
			/>
		</H3>
		<P>
			Go to Preferences -> click Privacy & Security -> Scroll down to permissions and select
			Settings. Search this site and select Allow.
		</P>
	</P>
</section>

<style>
	.tools {
		background-color: var(--background-black-red);
		min-height: 300px;
	}
</style>
