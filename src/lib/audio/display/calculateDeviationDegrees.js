function calculateDeviationDegrees(x) {
	var a = 50; //! a Hz symbolize maximum and minimum deviation on protractor from goal frequency -->resolution of protractor
	const A = 90 + (90 * x) / a;
	return A;
}

export default calculateDeviationDegrees;
