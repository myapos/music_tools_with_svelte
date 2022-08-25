import { hashFreqNotes } from '../constants';
import { thresholdcolordeviation } from '../constants';
import calculateDeviationDegrees from './calculateDeviationDegrees';

let thetadeviation = 135; //! degrees
let minimumThreshold = 5; //! Hz

const displayNote = (goalfrequency) => {
	let noteInfo = {
		note: '',
		freq: 0
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
				return true;
			}
		});
	} else {
		noteInfo.note = hashFreqNotes[goalfrequency];
	}

	const foundNote = noteInfo.note.length > 0;
	const deviation = goalfrequency - noteInfo.freq;

	if (foundNote) {
		console.log('Nearest note is', noteInfo.note, ' with deviation ', deviation);
	}
	// thetadeviation = calculateDeviationDegrees(deviation);
	// myRotate(thetadeviation);

	// 	thetadeviation = calculateDeviationDegrees(deviation);
	// 	myRotate(thetadeviation);
};

export default displayNote;
