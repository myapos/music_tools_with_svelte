import { hashFreqNotes } from '../constants';
import { thresholdcolordeviation } from '../constants';
import calculateDeviationDegrees from './calculateDeviationDegrees';

let deviation = 0; //Hz
let thetadeviation = 135; //degrees
let minimumThreshold = 5;

const displayNote = (goalfrequency) => {
	let note = '';

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
				console.log('found it', freq, ' note is', hashFreqNotes[freq]);
				note = hashFreqNotes[freq];
			}
			console.log('diff', diff);
		});
	} else {
		note = hashFreqNotes[goalfrequency];
	}

	// thetadeviation = calculateDeviationDegrees(deviation);
	// myRotate(thetadeviation);

	// 	thetadeviation = calculateDeviationDegrees(deviation);
	// 	myRotate(thetadeviation);
};

export default displayNote;
