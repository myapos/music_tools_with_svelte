import myYIN from './yin';

function gotStream({ stream, audioContext }) {
	//! Create an AudioNode from the stream.
	window.source = audioContext.createMediaStreamSource(stream); //fixes bug of firefox
	var microphone = audioContext.createMediaStreamSource(stream);
	const analyser = audioContext.createAnalyser();
	microphone.connect(analyser);

	// Create a pcm processing "node" for the filter graph.
	var bufferSize = 4096;
	var myPCMProcessingNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
	myPCMProcessingNode.onaudioprocess = function (e) {
		const input = e.inputBuffer.getChannelData(0);
		const output = e.outputBuffer.getChannelData(0);
		for (var i = 0; i < bufferSize; i++) {
			// Modify the input and send it to the output.
			// output[i] = input[i]; //no output to speakers
		}

		const yinBuffer = new Array(input.length / 2);
		//calculate pitch with YIN algorithm
		//console.log("audioContext.sampleRate: "+audioContext.sampleRate);
		myYIN({
			pitchBuf: input,
			sampleRate: audioContext.sampleRate,
			yinBuffer
		});
	};

	microphone.connect(myPCMProcessingNode);
	myPCMProcessingNode.connect(audioContext.destination);
}

export default gotStream;
