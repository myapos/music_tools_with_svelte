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

export const STARTING_FREQUENCY = 440;
export const MIN_RANGE_FREQ = 0.1;
export const MAX_RANGE_FREQ = 8000;

export const frequency = writable(STARTING_FREQUENCY);
