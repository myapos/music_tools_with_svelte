export interface timerT {
	speed: number;
	errorCallback?: (ref: { [key: string]: unknown }) => void;
	callback: () => void;
	intervalId?: number;
}

class Timer {
	speed: number;
	errorCallback?: (ref: { [key: string]: unknown }) => void;
	callback: () => void;
	intervalId = 0;
	drift = 0;
	startedAt = 0;
	expectedTime = 0;
	isPlaying = false;

	constructor({ speed, callback, errorCallback }: timerT) {
		this.speed = speed;

		this.callback = callback;

		if (errorCallback) {
			this.errorCallback = errorCallback;
		}
	}

	updateSpeed(speed: number) {
		this.speed = speed;
	}

	start(): void {
		this.startedAt = Date.now();
		this.isPlaying = true;

		this.round();
	}

	stop(): void {
		clearTimeout(this.intervalId);
		//! reset all values
		this.intervalId = 0;
		this.drift = 0;
		this.startedAt = 0;
		this.expectedTime = 0;
		this.isPlaying = false;
	}

	round(): void {
		const speed = this.speed;
		this.intervalId = window.setTimeout(() => {
			this.expectedTime = this.expectedTime + speed;

			const newTime = Date.now();
			const elapsedBySetTimeout = newTime - this.startedAt;

			this.drift = elapsedBySetTimeout - this.expectedTime;
			if (this.drift < 0 && typeof this.errorCallback !== 'undefined') {
				console.error('calling errorcallback');

				this.errorCallback(this);
			} else {
				this.callback();
				this.round();
			}
		}, speed - this.drift);
	}
}

export default Timer;
