import findMinimumIndex from './findMinimumIndex';
/**
 * Calculate difference from goalfrequency and save them in a new array.
 * Then get the one with minimum difference from goal frequency
 **/

function calculateNearestValue(goalfrequency, notesFreq) {
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

export default calculateNearestValue;
