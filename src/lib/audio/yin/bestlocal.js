/**
 * Implements step 6 of the YIN paper. It refines the best local estimate for tau value
 * This is needed to avoid flunctuation
 * @param tauEstimate the estimated tau value.
 * @return a better, more precise tau value.
 */

const bestlocal = (tauEstimate, yinBuffer) => {
	var i = tauEstimate + 1;
	var n = yinBuffer.length;
	var k = yinBuffer[tauEstimate];

	while (i < n && yinBuffer[i] < k) {
		k = yinBuffer[i];
		i++;
	}
	return i - 1;
};

export default bestlocal;
