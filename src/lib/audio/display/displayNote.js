import { notesFreq } from '../constants';
import { thresholdcolordeviation } from '../constants';
import calculateDeviationDegrees from './calculateDeviationDegrees';
import calculateNearestValue from './calculateNearestValue';

let deviation = 0; //Hz
let thetadeviation = 135; //degrees

const displayNote = (goalfrequency) => {
	var indexf1 = -1;
	var indexf2 = -1;
	var nearestIndex = -1;

	console.log('calculating...', goalfrequency);

	notesFreq.forEach((value1, index1) => {
		notesFreq[index1].forEach((value2, index2) => {
			/**
			Map contains two types of data. Notes as strings and frequencies as numbers. We check for goalfrequency
			only in numbers. Then we get the corresponding string of that number
			*/

			if (typeof notesFreq[index1][index2] === 'number') {
				//if value is found
				if (notesFreq[index1][index2] == goalfrequency) {
					console.log('found goal frequency in notesFreq[' + index1 + '][' + index2 + ']');
					console.log('Matching note is:' + notesFreq[index1][0]);
					// $(noteString).text(notesFreq[index1][0]);

					deviation = goalfrequency - notesFreq[index1][1];
					console.log('Tone is:' + notesFreq[index1][0] + ' with deviation:' + deviation);
					indexf1 = index1;
					indexf2 = index2;
					if (Math.abs(deviation) < thresholdcolordeviation) {
						// $('#noteString').css({ color: 'green' });
						// $('#my_protractor').css({ border: '5px solid green' });
					} else {
						// $('#noteString').css({ color: '#666600' });
						// $('#my_protractor').css({ border: '5px solid #999967' });
					}
				}
				console.log('indexf1 :' + indexf1);
			}
		});
	});

	/*if value is not found then indexf1 and idexf2 has the default values -1. So we are searching for nearest values in notesFreq array*/
	if (indexf1 == -1) {
		console.log('Matching note does not exist in notesFreq. Calculating the nearest value');

		nearestIndex = calculateNearestValue(goalfrequency, notesFreq);
		// $(noteString).text(notesFreq[nearestIndex][0]);
		deviation = goalfrequency - notesFreq[nearestIndex][1];
		console.log('Nearest tone is:' + notesFreq[nearestIndex][0] + ' with deviation:' + deviation);
		if (Math.abs(deviation) < thresholdcolordeviation) {
			// $('#noteString').css({ color: 'green' });
			// $('#my_protractor').css({ border: '5px solid green' });
		} else {
			// $('#noteString').css({ color: '#666600' });
			// $('#my_protractor').css({ border: '5px solid #999967' });
		}
		/**/
	}

	thetadeviation = calculateDeviationDegrees(deviation);
	// myRotate(thetadeviation);

	// 	thetadeviation = calculateDeviationDegrees(deviation);
	// 	myRotate(thetadeviation);
};

export default displayNote;
