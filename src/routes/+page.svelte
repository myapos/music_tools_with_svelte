<script>
	import Tuner from '$lib/components/Tuner.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Link from '$lib/components/Link.svelte';

	const h1ExtraClasses = 'p-8';
	const h2ExtraClasses = 'py-2';
	const orderedListExtraClasses = 'marker:text-red-900  list-decimal list-inside my-2"';
	const listItemExtraClasses = 'my-2"';
</script>

<H1 className={h1ExtraClasses}>Instrument tuner</H1>

<section
	class="tuner md:text-xl md:text-justify md:tracking-wide bg-red-900 w-full flex justify-center relative p-8 "
>
	<Tuner />
</section>

<section
	class="text-justify md:tracking-wide py-8 instructions w-1/2 md:w-full md:py-8 md:px-4 md:text-2xl"
>
	<H2 className={h2ExtraClasses}>What is an electronic tuner?</H2>
	<P>
		In music, an <Link
			url="https://en.wikipedia.org/wiki/Electronic_tuner"
			description="electronic tuner"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/>
		is a device that detects and displays the pitch of musical notes played on a musical instrument.
		<span class="font-semibold">"Pitch"</span> is the perceived fundamental frequency of a musical note,
		which is typically measured in Hertz. Simple tuners indicate—typically with an analog needle or dial,
		LEDs, or an LCD screen—whether a pitch is lower, higher, or equal to the desired pitch. Since the
		early 2010s, software applications can turn a smartphone, tablet, or personal computer into a tuner.More
		complex and expensive tuners indicate pitch more precisely. Tuners vary in size from units that fit
		in a pocket to 19" rack-mount units. Instrument technicians and piano tuners typically use more expensive,
		accurate tuners.
	</P>
	<P>
		The simplest tuners detect and display tuning only for a single pitch—often "A" or "E"—or for a
		small number of pitches, such as the six used in the standard tuning of a guitar (E,A,D,G,B,E).
		More complex tuners offer chromatic tuning for all 12 pitches of the equally tempered octave.
		Some electronic tuners offer additional features, such as pitch calibration, temperament
		options, the sounding of a desired pitch through an amplifier plus speaker, and adjustable
		"read-time" settings that affect how long the tuner takes to measure the pitch of the note.
	</P>
	<H2 className={h2ExtraClasses}>How to use an electronic tuner?</H2>

	<P>
		Playing with a tuner will help develop your intonation and an understanding of the tendencies of
		your instrument. To use this instrument tuner, make sure the built-in microphone has web access.
		<ol class={orderedListExtraClasses}>
			<li class={listItemExtraClasses}>
				Play any note. You will see the needle move and the strobe rotates until it finds the pitch
				you are playing. This tuner is tuned to A440. Remember, these notes are shown in concert
				pitch. If you play guitar, piano, or another instrument pitched in C, then you will see the
				note name of the pitch you play. If you play an instrument that needs to transpose, like a
				trumpet or French horn, then you will need to understand how to transpose.
			</li>
			<li class={listItemExtraClasses}>
				Once the tuner recognizes what note you are playing, try to adjust it so that it stays
				perfectly steady and centered on the dial. If you had to bring the pitch up, you were flat.
				If you had to bring the pitch down, then you were sharp.
			</li>
			<li class={listItemExtraClasses}>
				Make an adjustment to your instrument, either by adjusting a slide, a peg, or whatever your
				instrument's equivalent is. Play the note again. If the needle and strobe are centered and
				steady, then your instrument is tuned.
			</li>
		</ol>
	</P>

	<H2 className={h2ExtraClasses}>Granting Microphone Access</H2>

	<P>
		Granting Microphone Access This tuner will require mic access through your web browser. If you
		have disabled it in the past, then the tuner will not work. - Chrome: Go to Settings -> Site
		Settings -> Microphone and allow this site to access the microphone. - Firefox: Go to
		Preferences -> click Privacy & Security -> Scroll down to permissions and select Settings.
		Search this site and select Allow. - Safari: Safari > Preferences, then click Websites. Change
		the microphone setting to allow this site.
	</P>

	<P>
		Granting Microphone Access This tuner will require mic access through your web browser. If you
		have disabled it in the past, then the tuner will not work. - Chrome: Go to Settings -> Site
		Settings -> Microphone and allow this site to access the microphone. - Firefox: Go to
		Preferences -> click Privacy & Security -> Scroll down to permissions and select Settings.
		Search this site and select Allow. - Safari: Safari > Preferences, then click Websites. Change
		the microphone setting to allow this site.
	</P>
</section>

<style>
	.instructions {
		/* width: 50%; */
	}
	.tuner {
		background-color: var(--background-black-red);
		min-height: 300px;
	}

	/* section {
		overflow-y: scroll;
	} */
</style>
