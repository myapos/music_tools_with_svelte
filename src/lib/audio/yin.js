import displayNote from './displayNote';

function myYIN(pitchBuf, sampleRate) {
	//console.log("Hello from my_YIN");
	var tauEstimate = -1;

	//step 2
	difference(pitchBuf);

	//step 3
	cumulativeMeanNormalizedDifference();

	//step 4

	tauEstimate = absoluteThreshold();

	//step 5

	if (tauEstimate != -1) {
		//step 6
		var localTau = bestlocal(tauEstimate);

		//step 5
		//var betterTau = parabolicInterpolation(tauEstimate);
		var betterTau = parabolicInterpolation(localTau);

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
		goalfrequency = myMedianSortedFilter[Math.round(myMedianSortedFilter.length / 2)];
		//console.log(""+goalfrequency);
		displayNote();
		//console.log("pitchInHertz: "+pitchInHertz);
	}
}

/**
 * Implements the difference function as described
 * in step 2 of the YIN paper
 */
function difference(difBuf) {
	var j, tau;
	var delta;

	//population of yinBuffer with zero values
	for (tau = 0; tau < yinBuffer.length; tau++) {
		yinBuffer[tau] = 0;
	}

	//save differences from difBuf in yinBuffer
	for (tau = 1; tau < yinBuffer.length; tau++) {
		for (j = 0; j < yinBuffer.length; j++) {
			delta = difBuf[j] - difBuf[j + tau];
			yinBuffer[tau] += delta * delta;
		}
	}
	//printArray(yinBuffer);
	//console.log("Hello from difference");
}

function cumulativeMeanNormalizedDifference() {
	var tau;
	yinBuffer[0] = 1;
	//Very small optimization in comparison with AUBIO
	//start the running sum with the correct value:
	//the first value of the yinBuffer
	var runningSum = yinBuffer[1];
	//yinBuffer[1] is always 1
	yinBuffer[1] = 1;
	//now start at tau = 2
	for (tau = 2; tau < yinBuffer.length; tau++) {
		runningSum += yinBuffer[tau];
		yinBuffer[tau] *= tau / runningSum;
	}
	//console.log("Hello from cumulativeMeanNormalizedDifference");
}

/*** Implements step 4 of the YIN paper
 */
function absoluteThreshold() {
	/**/
	var temp;
	var sortedyinBuffer;
	var buffwithminimums = [0];
	var countmin = 0;

	//returns the minimum period value which is smaller than threshold

	/* Search inside the yinBuffer to find in which position exists minimum of threshold and return it*/
	for (var tau = 1; tau < yinBuffer.length; tau++) {
		if (yinBuffer[tau] < threshold) {
			while (tau + 1 < yinBuffer.length && yinBuffer[tau + 1] < yinBuffer[tau]) tau++;
			return tau;
		}
	}
	//no pitch found
	//console.log("Hello from absoluteThreshold");
	return -1; /**/
}

/**
 * Implements step 5 of the YIN paper. It refines the estimated tau value
 * using parabolic interpolation. This is needed to detect higher
 * frequencies more precisely.
 * @param tauEstimate the estimated tau value.
 * @return a better, more precise tau value.
 */

function parabolicInterpolation(tauEstimate) {
	var s0, s1, s2, newtauEstimate;
	var ar, par;

	/*boundary handling*/
	var x0 = tauEstimate < 1 ? tauEstimate : tauEstimate - 1; //handles the first position of array

	var x2 = tauEstimate + 1 < yinBuffer.length ? tauEstimate + 1 : tauEstimate; //handles the last position of the array. Checks if exceeds array boundaries

	if (x0 == tauEstimate)
		//applys when tauestimate is the first element of array
		return yinBuffer[tauEstimate] <= yinBuffer[x2] ? tauEstimate : x2; //compares only two points and is returning the smaller one

	if (x2 == tauEstimate)
		//applys when tauestimate is the last element of array
		return yinBuffer[tauEstimate] <= yinBuffer[x0] ? tauEstimate : x0; //compares only two points and is returning the smaller one

	/*in all other cases 3 points are interpolated. x0 is taustimate-1 position in array and x2 is tauestimate+1 position in array. So
they are the immediate neighbors to tauestimate. We are using parabola curve and we are searching for minimum on that curve.
Formulae is f(x)=a2x^2+a1x+a0. 
For more information see http://sfb649.wiwi.hu-berlin.de/fedc_homepage/xplore/tutorials/xegbohtmlnode62.html 
*/
	s0 = yinBuffer[x0];
	s1 = yinBuffer[tauEstimate];
	s2 = yinBuffer[x2];

	//newtauEstimate=0.5*(Math.pow(tauEstimate, 2)*s2 - s1*Math.pow(x2,2)-Math.pow(x0,2)*s2+Math.pow(x2, 2)*s0 +Math.pow(x0, 2)*s1 - s0*Math.pow(tauEstimate, 2))/(x2*s1 - tauEstimate*s2);
	ar = Math.pow(tauEstimate - x0, 2) * (s1 - s2) - Math.pow(tauEstimate - x2, 2) * (s1 - s0);
	par = (tauEstimate - x0) * (s1 - s2) - (tauEstimate - x2) * (s1 - s0);

	newtauEstimate = tauEstimate - (0.5 * ar) / par;
	return newtauEstimate;
	//console.log("newtauEstimate: "+newtauEstimate+"tauEstimate: "+tauEstimate);
	//return (tauEstimate + 0.5 * (s2 - s0 ) / (2.0 * s1 - s2 - s0));
	//return (0.5*(Math.pow(tauEstimate, 2)*s2 - s1*Math.pow(x2,2)-Math.pow(x0,2)*s2+Math.pow(x2, 2)*s0 +Math.pow(x0, 2)*s1 - s0*Math.pow(tauEstimate, 2))/(x2*s1 - tauEstimate*s2));
	//console.log("Hello from parabolicInterpolation");
}

/**
 * Implements step 6 of the YIN paper. It refines the best local estimate for tau value
 * This is needed to avoid flunctuation
 * @param tauEstimate the estimated tau value.
 * @return a better, more precise tau value.
 */

function bestlocal(tauEstimate) {
	var bestlocalestimate = tauEstimate;
	var lowlimit = i - tauEstimate / 2;
	var highlimit = i + tauEstimate / 2;

	for (var i = 0; i < yinBuffer.length; i++) {
		if (lowlimit.toFixed(0) > 0) {
			//search in vicinity for new minimum
			for (var j = lowlimit.toFixed(0); j <= highlimit.toFixed(0); j++)
				if (yinBuffer[j] < tauEstimate) {
					bestlocalestimate = j;
					//alert("Hello from 6 step");
					return bestlocalestimate;
				}
		}
	}

	//no pitch found

	return bestlocalestimate;
}

export default myYIN;
