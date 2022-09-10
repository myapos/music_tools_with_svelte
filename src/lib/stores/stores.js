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

export const MIN_RANGE_FREQ = 150;
export const MAX_RANGE_FREQ = 8000;
export const STARTING_FREQ = 440;

export const frequency = writable(MIN_RANGE_FREQ);

export const sliderPos = writable(0);

const logSlider = new Log({
	minpos: MIN_RANGE_FREQ,
	maxpos: MAX_RANGE_FREQ,
	minval: MIN_RANGE_FREQ,
	maxval: MAX_RANGE_FREQ
});

export const logarithmicScale = writable(logSlider);
export const startingPos = logSlider.position(STARTING_FREQ);
