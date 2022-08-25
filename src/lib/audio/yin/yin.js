import displayNote from '../displayNote';
import difference from './difference';
import cumulativeMeanNormalizedDifference from './cumulativeMeanNormalizedDifference';
import absoluteThreshold from './absoluteThreshold';
import parabolicInterpolation from './parabolicInterpolation';
import bestlocal from './bestlocal';

//! counts how many pitches are calculated. Every length values is reset in zero.
let count = 0;
//! initialization for myMedianFilter. In this array 19 values of pitch is saved and median filtering is applied
let myMedianFilter = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//! initialization for myMedianSortedFilter. This array contains sorted values of myMedianFilter
let myMedianSortedFilter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let threshold = 0.15;
let pitchInHertz = -1;

function myYIN({ pitchBuf, sampleRate, yinBuffer }) {
	//console.log("Hello from my_YIN");
	var tauEstimate = -1;

	//step 2
	difference(pitchBuf, yinBuffer);

	//step 3
	cumulativeMeanNormalizedDifference(yinBuffer);

	//step 4

	tauEstimate = absoluteThreshold(yinBuffer, threshold);

	//step 5

	if (tauEstimate != -1) {
		//step 6
		var localTau = bestlocal(tauEstimate, yinBuffer);

		//step 5
		//var betterTau = parabolicInterpolation(tauEstimate);
		var betterTau = parabolicInterpolation(localTau, yinBuffer);

		//conversion to Hz
		pitchInHertz = sampleRate / betterTau;

		//do some filtering...median filtering for 1D signal is selected

		/*step 1. Save myMedianFilter.length values for computed pitch in an array*/
		myMedianFilter[count] = pitchInHertz; //Math.round(pitchInHertz);

		/*handle counter*/
		if (count < myMedianFilter.length - 1) {
			//increase count
			count++;
		} else {
			//reset to zero
			count = 0;
		}
		//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

		//check myMedianFilter values
		//console.log("Checking myMedianFilter. Length:"+ myMedianFilter.length);
		//printArray(myMedianFilter);

		/*step 2. sort myMedianFilter values*/

		myMedianSortedFilter = myMedianFilter.sort(function (a, b) {
			return a - b;
		});

		//check sorted values
		//console.log(""+myMedianSortedFilter);

		/*step3. Select as goalfrequency the median element and display*/

		//console.log("median element index:"+(Math.round(myMedianSortedFilter.length/2)));
		//Math.round(myMedianSortedFilter.);

		//set goal frequency
		const goalfrequency = myMedianSortedFilter[Math.round(myMedianSortedFilter.length / 2)];

		console.log('goalfrequency', goalfrequency);
		console.log('pitchInHertz', pitchInHertz);
		displayNote(goalfrequency);

		return goalfrequency;
	}
}

export default myYIN;
