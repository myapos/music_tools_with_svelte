import { writable } from 'svelte/store';

//! tuner

export const stateNoteInfo = writable({ note: '', deviation: 0 });
export const stateAudioContext = writable({});
export const startedTuning = writable(false);

//! metronome

export const tempo = writable(100);
export const bpm = writable(4);
export const metronomeIsPlaying = writable(false);

//! frequency generator
import Log from '$lib/utils/Log';

export const STARTING_FREQUENCY = 440;
export const MIN_RANGE_FREQ = 0;
export const MAX_RANGE_FREQ = 8000;

export const frequency = writable(STARTING_FREQUENCY);

export const sliderPos = writable(0);

const logSlider = new Log({
	minpos: MIN_RANGE_FREQ,
	maxpos: MAX_RANGE_FREQ,
	minval: MIN_RANGE_FREQ,
	maxval: MAX_RANGE_FREQ
});

export const logarithmicScale = writable(logSlider);
