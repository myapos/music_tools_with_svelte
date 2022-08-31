<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import Button from '$lib/components/Button.svelte';
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

	<H2 className={h2ExtraClasses}>What is an tone generator?</H2>
	<P>
		A <Link
			url="https://en.wikipedia.org/wiki/Signal_generator"
			description="signal"
			target="_blank"
			className="p-0 text-red-900 hover:text-red-400"
		/> or tone generator is one of a class of electronic devices that generates electrical signals with
		set properties of amplitude, frequency, and wave shape. These generated signals are used as a stimulus
		for electronic measurements, typically used in designing, testing, troubleshooting, and repairing
		electronic or electroacoustic devices, though it often has artistic uses as well.

		<P>
			There are many different types of signal generators with different purposes and applications
			and at varying levels of expense. These types include function generators, RF and microwave
			signal generators, pitch generators, arbitrary waveform generators, digital pattern
			generators, and frequency generators. In general, no device is suitable for all possible
			applications. A signal generator may be as simple as an oscillator with calibrated frequency
			and amplitude. More general-purpose signal generators allow control of all the characteristics
			of a signal. Modern general-purpose signal generators will have a microprocessor control and
			may also permit control from a personal computer. Signal generators may be free-standing
			self-contained instruments, or may be incorporated into more complex automatic test systems.
		</P>
	</P>
	<H2 className={h2ExtraClasses}>How to use this tone generator?</H2>

	<P className="p-5 border-2 border-red-900 rounded text-lg text-red-900"
		>Be aware that the generation of high frequencies/volume may damage your hearing.</P
	>
	<P>
		<H3>General Use</H3>
		You can use this tone generator by selecting a frequency and clicking Play. The tone will be played
		for a few seconds and stop by default. The frequency selection can be achieved using the following
		controls
		<ol class="list-disc list-inside marker:text-red-900">
			<li>Frequency selector</li>
			<li>Step Controls</li>
			<li>Notes Controls</li>
		</ol>

		<P>Below is a more detailed explanation of each option.</P>

		<H3>Frequency Selector</H3>

		<P>
			You can use this tone generator by using the frequency selector and clicking Play. The range
			of the freqeuncy selector is between 0-20154 Hz.
		</P>

		<H3>Volume Selector</H3>

		<P>
			You can change the volume of the playing tone between 0 -100%. Be aware though that the
			generation in high volumes may damage your hearing.
		</P>

		<H3>Notes Selector</H3>
		<P>
			You can search for the frequency of a specific tone in a octave by using the notes selector
			dropdown.
		</P>

		<H3>Step Controls</H3>
		<P>
			You can fine tune the desired frequency by using the arrows left/right for step by step
			increasements/decreasements of a specific tone. Each step has a value of 1Hz.
		</P>
		<H3>Wave Shape</H3>
		<P>
			In electronics, acoustics, and related fields, the <Link
				url="https://en.wikipedia.org/wiki/Waveform"
				description="waveform"
				target="_blank"
				className="p-0 text-red-900 hover:text-red-400"
			/>
			of a signal is the shape of its graph as a function of time, independent of its time and magnitude
			scales and of any displacement in time.
		</P>
		<P>
			In this tone generator the wave shapes that are supported are <span
				class="font-semibold  text-red-900">Sine, Square, Sawtooth and Triangle</span
			>. You can select and use them before playing from the wave shape selector.
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
