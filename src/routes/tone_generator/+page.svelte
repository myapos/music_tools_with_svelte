<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import H1 from '$lib/components/H1.svelte';
	import Button from '$lib/components/Button.svelte';
	import H2 from '$lib/components/H2.svelte';
	import H3 from '$lib/components/H3.svelte';
	import P from '$lib/components/P.svelte';
	import Link from '$lib/components/Link.svelte';

	const h1ExtraClasses = 'p-8';
	const h2ExtraClasses = 'py-2';

	const types = [{ text: 'sine' }, { text: 'square' }, { text: 'sawtooth' }, { text: 'triangle' }];
	const STARTING_FREQUENCY = 440;
	$: isPlaying = false;
	$: frequency = STARTING_FREQUENCY;

	let selectedType: any;

	//! globals for contenxt

	let gain: any;
	let audioContext: any;
	let timeoutId: any;

	const stop = ({ g, context }: any) => {
		isPlaying = false;
		g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04);
		console.log('.state', audioContext.state);

		if (audioContext.state === 'running') {
			audioContext.close();
		}
		clearTimeout(timeoutId);
	};

	const handleGenerator = (frequency = 300, duration = 5000) => {
		console.log('logs:', '1');

		if (isPlaying) {
			//! stop
			stop({ g: gain, context: audioContext });
		} else {
			const context = new AudioContext();
			audioContext = context;
			const oscillator = context.createOscillator();
			const g = context.createGain();
			gain = g;
			oscillator.connect(g);
			g.connect(context.destination);

			oscillator.type = selectedType.text;
			oscillator.frequency.value = frequency;

			oscillator.start(0);

			timeoutId = setTimeout(() => {
				console.log('logs:', '4');
				//! stop
				if (isPlaying) {
					stop({ g: gain, context: audioContext });
				}
			}, duration);

			isPlaying = true;
		}

		console.log('logs:', '2');

		console.log('logs:', '3');
	};

	let values = [STARTING_FREQUENCY];

	const onChangeFreq = (e) => {
		frequency = e.detail.value;
	};
</script>

<H1 className={h1ExtraClasses}>Tone Generator</H1>

<section
	class="tools md:text-xl md:text-justify md:tracking-wide
     bg-red-900 w-full flex flex-col justify-center relative p-8 "
>
	<RangeSlider
		bind:values
		all="label"
		float={false}
		min={0}
		max={20154}
		hoverable
		on:change={onChangeFreq}
	/>

	<div class="w-1/2 flex flex-col items-center justify-centers mx-auto">
		<div class="text-tuner-color text-xl text-center w-2/5 p-2 rounded mx-auto mt-5">
			{frequency} Hz
		</div>
		<select
			class="w-full p-5 rounded"
			bind:value={selectedType}
			on:change={(e) => {
				console.log('e', e);
			}}
		>
			{#each types as type}
				<option value={type} selected={type.text === 'sine'}>
					{type.text}
				</option>
			{/each}
		</select>
		<Button
			onClick={() => handleGenerator(frequency)}
			className="start text-xl text-center text-tuner-color cursor-pointer
	w-2/5 p-2 bg-black hover:bg-red-900 hover:text-black
	rounded mx-auto mt-5">{isPlaying ? 'Stop' : 'Play'}!</Button
		>
	</div>
</section>
{isPlaying}
<section class="text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl">
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
		Using a tuner while playing will help you improve your intonation and have a better grasp of the
		characteristics of your instrument. Make sure the integrated microphone has web connectivity
		before using this instrument tuner. Below are some simple steps you can follow in order to use
		this tuner.

		<H3>STEP 1</H3>
		<P>
			Try to play a note with your musical instrument. The tuner will detect the pitch and display
			it. In the same time it will detect the deviation from the pitch that is detected and will
			rotate the needle accordingly. For example playing the A pitch will be matched with 440Hz and
			will place the needle in a vertical position right in the middle of the arc. Additionally,
			when a note is detected with zero deviation the color of the arc and the detected pitch will
			change meaning that the pitch is considered to be detected succesfully.
		</P>
		<H3>STEP 2</H3>
		<P>
			When the tuner detects the note that you are playing, try to adjust your note bringing the
			pitch up or down in order to tune your instrument. When the needle is positioned in the middle
			of the arc then the deviation of the detected pitch is almost zero. That means that the pitch
			is detected with great accuracy and the note is tuned.
		</P>
		<H3>STEP 3</H3>
		<P>
			Repeat the process for every chord of your instrument. For example for a mandolin to be tuned
			your goal is to tune the instrument to E-A-D-G notes. When every chord is tuned then your
			instrument is tuned.
		</P>
	</P>

	<H2 className={h2ExtraClasses}>Granting Microphone Access</H2>

	<P>
		This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome 0or Firefox
		browsers

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
