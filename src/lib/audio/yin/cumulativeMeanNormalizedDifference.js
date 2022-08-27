const cumulativeMeanNormalizedDifference = (yinBuffer) => {
	var tau;
	yinBuffer[0] = 1;

	//! Very small optimization in comparison with AUBIO
	//! start the running sum with the correct value:
	//! the first value of the yinBuffer

	var runningSum = yinBuffer[1];
	//! yinBuffer[1] is always 1
	yinBuffer[1] = 1;

	//! now start at tau = 2
	for (tau = 2; tau < yinBuffer.length; tau++) {
		runningSum += yinBuffer[tau];
		yinBuffer[tau] *= tau / runningSum;
	}
};

export default cumulativeMeanNormalizedDifference;
