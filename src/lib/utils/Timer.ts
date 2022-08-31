interface constructorT {
	tempo: number;
	errorCallback?: () => void;
	callback: () => void;
	intervalId?: number;
}

class Timer {
	tempo: number;
	errorCallback?: () => void;
	callback: () => void;
	intervalId = 0;
	drift = 0;
	startedAt = 0;
	expectedTime = 0;

	constructor({ tempo, callback, errorCallback }: constructorT) {
		this.tempo = tempo;
		this.callback = callback;

		if (errorCallback) {
			this.errorCallback = errorCallback;
		}
	}

	start(): void {
		console.log('start');
		this.round(this.tempo);
		this.startedAt = Date.now();
	}

	stop(): void {
		console.log('stop');
		clearTimeout(this.intervalId);
	}

	round(tempo: number): void {
		this.intervalId = window.setTimeout(() => {
			this.expectedTime = this.expectedTime + tempo;

			const newTime = Date.now();
			const elapsedBySetTimeout = newTime - this.startedAt;

			this.drift = elapsedBySetTimeout - this.expectedTime;

			console.log('drift', this.drift);
			this.callback();
			this.round(tempo - this.drift);
		}, tempo - this.drift);
	}
}

export default Timer;
