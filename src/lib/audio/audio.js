import { stateAudioContext } from '$lib/stores/stores';
import gotStream from './gotStream';
import didntGetStream from './didntGetStream';

const audio = (showPopup) => {
	//! globals for pitch detection
	let audioContext = null;

	window.craicAudioContext = (function () {
		return window.webkitAudioContext || window.AudioContext;
	})();
	try {
		audioContext = new craicAudioContext();
		stateAudioContext.update(() => {
			return audioContext;
		});

		//! keep in store audioContext
	} catch (e) {
		showPopup({ message: 'Web Audio API is not supported in this browser' + e });
	}

	//! get the input audio stream and set up the nodes
	try {
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then((stream) => {
				/* use the stream */
				return gotStream({
					stream,
					audioContext
				});
			})
			.catch((err) => {
				/* handle the error */
				didntGetStream(err, showPopup);
			});
	} catch (e) {
		console.error('webkitGetUserMedia threw exception :' + e);
	}
};

export default audio;
