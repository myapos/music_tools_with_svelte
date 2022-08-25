/**
 * Implements the difference function as described
 * in step 2 of the YIN paper
 */
const difference = (difBuf, yinBuffer) => {
	let j, tau;
	let delta;

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
};

export default difference;
