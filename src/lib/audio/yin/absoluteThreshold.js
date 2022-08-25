/*** Implements step 4 of the YIN paper
 */
const absoluteThreshold = (yinBuffer, threshold) => {
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
};

export default absoluteThreshold;
