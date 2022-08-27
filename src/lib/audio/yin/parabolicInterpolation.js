/**
 * Implements step 5 of the YIN paper. It refines the estimated tau value
 * using parabolic interpolation. This is needed to detect higher
 * frequencies more precisely.
 * @param tauEstimate the estimated tau value.
 * @return a better, more precise tau value.
 */

const parabolicInterpolation = (tauEstimate, yinBuffer) => {
	var s0, s1, s2, newtauEstimate;
	var ar, par;

	/*boundary handling*/
	//handles the first position of array
	var x0 = tauEstimate < 1 ? tauEstimate : tauEstimate - 1;

	//handles the last position of the array. Checks if exceeds array boundaries
	var x2 = tauEstimate + 1 < yinBuffer.length ? tauEstimate + 1 : tauEstimate;

	if (x0 == tauEstimate)
		//applys when tauestimate is the first element of array
		//compares only two points and is returning the smaller one
		return yinBuffer[tauEstimate] <= yinBuffer[x2] ? tauEstimate : x2;

	if (x2 == tauEstimate)
		//applys when tauestimate is the last element of array
		//compares only two points and is returning the smaller one
		return yinBuffer[tauEstimate] <= yinBuffer[x0] ? tauEstimate : x0;

	/**In all other cases 3 points are interpolated. x0 is taustimate-1 position in array and x2 is tauestimate+1 position in array. So
	 * they are the immediate neighbors to tauestimate. We are using parabola curve and we are searching for minimum on that curve.
	 * Formulae is f(x)=a2x^2+a1x+a0.
	 * For more information see http://sfb649.wiwi.hu-berlin.de/fedc_homepage/xplore/tutorials/xegbohtmlnode62.html
	 **/
	s0 = yinBuffer[x0];
	s1 = yinBuffer[tauEstimate];
	s2 = yinBuffer[x2];

	ar = Math.pow(tauEstimate - x0, 2) * (s1 - s2) - Math.pow(tauEstimate - x2, 2) * (s1 - s0);
	par = (tauEstimate - x0) * (s1 - s2) - (tauEstimate - x2) * (s1 - s0);

	newtauEstimate = tauEstimate - (0.5 * ar) / par;
	return newtauEstimate;
};

export default parabolicInterpolation;
