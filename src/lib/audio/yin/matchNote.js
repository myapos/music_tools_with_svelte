import { stateNoteInfo } from '$lib/stores/stores';
import { hashFreqNotes, minimumThreshold } from '../constants';

const matchNote = (goalfrequency) => {
	let noteInfo = {
		note: '',
		freq: 0,
		deviation: 0
	};

	console.log('calculating...', goalfrequency);
	//! search in hash map to find the nearest note

	const noteExistInHash = typeof hashFreqNotes[goalfrequency] !== 'undefined';
	console.log('noteExistInHash', noteExistInHash);

	if (!noteExistInHash) {
		//! find the nearest note to goalFrequency with deviation
		//! calculate differences from goalFrequency
		//! if the difference is near to zero (threshold applied) then this is our note
		Object.keys(hashFreqNotes).forEach((freq) => {
			const diff = Math.abs(freq - goalfrequency);

			if (diff < minimumThreshold) {
				noteInfo.note = hashFreqNotes[freq];
				noteInfo.freq = freq;
				noteInfo.deviation = goalfrequency - freq;
				return true;
			}
		});
	} else {
		noteInfo.note = hashFreqNotes[goalfrequency];
	}

	const foundNote = noteInfo.note.length > 0;

	if (foundNote) {
		console.log('Nearest note is', noteInfo.note, ' with deviation ', noteInfo.deviation);
		//! update the noteInfo to svelte store
		stateNoteInfo.update((prev) => {
			return noteInfo;
		});
	}

	return noteInfo;
};

export default matchNote;
