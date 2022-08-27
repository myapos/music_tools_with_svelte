/**Implements step 4 of the YIN paper
 **/
const absoluteThreshold = (yinBuffer, threshold) => {
	//returns the minimum period value which is smaller than threshold

	/**Search inside the yinBuffer to find in which position exists minimum of threshold and return it*/
	for (var tau = 1; tau < yinBuffer.length; tau++) {
		if (yinBuffer[tau] < threshold) {
			while (tau + 1 < yinBuffer.length && yinBuffer[tau + 1] < yinBuffer[tau]) tau++;
			return tau;
		}
	}
	//no pitch found
	return -1;
};

export default absoluteThreshold;
