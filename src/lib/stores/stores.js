import { writable } from 'svelte/store';

export const stateNoteInfo = writable({});
export const stateAudioContext = writable({});

export const tempo = writable(100);
export const bpm = writable(4);
export const metronomeIsPlaying = writable(false);
