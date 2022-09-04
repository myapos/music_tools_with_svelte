const didntGetStream = (err, showPopup) => {
	const msg = 'Stream generation failed.' + err + '.Please try again with Chrome or Firefox';

	showPopup({ message: msg });
	console.error(msg);
};
export default didntGetStream;
