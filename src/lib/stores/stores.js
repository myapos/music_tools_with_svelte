import { writable } from 'svelte/store';

export const stateNoteInfo = writable({});
export const stateAudioContext = writable({});

export const tempo = writable(200);
export const metronomeIsPlaying = writable(false);
