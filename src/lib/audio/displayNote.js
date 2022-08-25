import { notesFreq } from './constants';
import { thresholdcolordeviation } from './constants';

var deviation = 0; //Hz
var thetadeviation = 135; //degrees

function findMinimumIndex(arr) {
	/*initializations*/
	var tempminOfArray = 100000;
	var tempIndex = -1;

	arr.forEach((value1m, index1m) => {
		arr[index1m].forEach((value2m, index2m) => {
			if (typeof arr[index1m][index2m] === 'number') {
				/**/

				if (arr[index1m][index2m] <= tempminOfArray) {
					tempminOfArray = arr[index1m][index2m];
					tempIndex = index1m;
				}
			}
		});
	});
	// 	$.each(arr, function (index1m, value1m) {
	// 		$.each(arr[index1m], function (index2m, value2m) {
	// 			/*Map contains two types of data. Notes as strings and frequencies as numbers. We check for minimum
	// only in numbers. Then we get string of that number*/

	// 			if ($.type(arr[index1m][index2m]) === 'number') {
	// 				/**/

	// 				if (arr[index1m][index2m] <= tempminOfArray) {
	// 					tempminOfArray = arr[index1m][index2m];
	// 					tempIndex = index1m;
	// 				}
	// 			}
	// 		});
	// 	});
	//console.log("tempIndex:"+tempIndex);
	return tempIndex;
}

/**
 * Calculate difference from goalfrequency and save them in a new array.
 * Then get the one with minimum difference from goal frequency
 **/

function calculateNearestValue(goalfrequency) {
	var minimumIndex = -1;

	notesFreq.forEach((value1NV, index1NV) => {
		notesFreq[index1NV].forEach((value2NV, index2NV) => {
			/*Map contains two types of data. 
			Notes as strings and frequencies as numbers. We apply difference only in numbers. 
			Then we get string of that number */

			if (typeof notesFreq[index1NV][index2NV] === 'number') {
				notesFreq[index1NV][index2NV] = Math.abs(notesFreq[index1NV][index2NV] - goalfrequency);
			}
		});
	});

	minimumIndex = findMinimumIndex(notesFreq);
	//console.log("minimum Index at:"+minimumIndex);
	//console.log("nearest music tone is:"+notesFreq[minimumIndex][0]);
	return minimumIndex;
}

function calculateDeviationDegrees(x) {
	var a = 50; //! a Hz symbolize maximum and minimum deviation on protractor from goal frequency -->resolution of protractor
	const A = 90 + (90 * x) / a;
	return A;
}

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

		nearestIndex = calculateNearestValue(goalfrequency);
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
