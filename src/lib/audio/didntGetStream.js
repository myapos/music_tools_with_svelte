const didntGetStream = (err) => {
	const msg = 'Stream generation failed.' + err + '.Please try again with Chrome or Firefox';

	alert(msg);
	console.error(msg);
};
export default didntGetStream;
