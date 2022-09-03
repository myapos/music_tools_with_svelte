import { writable } from 'svelte/store';

export const stateNoteInfo = writable({});
export const stateAudioContext = writable({});

export const tempo = writable(100);
export const bpm = writable(4);
export const metronomeIsPlaying = writable(false);

//! frequency generator

export const STARTING_FREQUENCY = 440;
export const MIN_RANGE_FREQ = 0;
export const MAX_RANGE_FREQ = 20154;

export const frequency = writable(STARTING_FREQUENCY);
