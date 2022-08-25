import gotStream from './gotStream';
import didntGetStream from './didntGetStream';

const audio = () => {
	//! globals for pitch detection
	let audioContext = null;

	//! globals for median filtering
	window.craicAudioContext = (function () {
		return window.webkitAudioContext || window.AudioContext;
	})();

	navigator.getMedia =
		navigator.mozGetUserMedia ||
		navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.msGetUserMedia;

	try {
		// audioContext = new webkitAudioContext();
		audioContext = new craicAudioContext();
		// alert('Web Audio API is  supported in this browser');
	} catch (e) {
		alert('Web Audio API is not supported in this browser');
	}

	// get the input audio stream and set up the nodes
	try {
		// calls the function gotStream
		navigator.getMedia(
			{ audio: true },
			(stream) => {
				return gotStream({
					stream,
					audioContext
				});
			},
			didntGetStream
		);
	} catch (e) {
		console.error('webkitGetUserMedia threw exception :' + e);
	}
};

export default audio;
