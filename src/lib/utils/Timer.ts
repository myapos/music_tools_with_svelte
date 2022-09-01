export interface timerT {
	speed: number;
	errorCallback?: (ref: any) => void;
	callback: () => void;
	intervalId?: number;
}

class Timer {
	speed: number;
	errorCallback?: () => void;
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
		console.log('reset logs:', speed, ' timer', this);
	}

	start(): void {
		this.startedAt = Date.now();
		this.isPlaying = true;

		this.round();
		console.log('start', this);
	}

	stop(): void {
		clearTimeout(this.intervalId);
		//! reset all values
		this.intervalId = 0;
		this.drift = 0;
		this.startedAt = 0;
		this.expectedTime = 0;
		this.isPlaying = false;

		console.log('stop', this);
	}

	round(): void {
		const speed = this.speed;
		console.log('using new speed', speed);
		this.intervalId = window.setTimeout(() => {
			this.expectedTime = this.expectedTime + speed;

			const newTime = Date.now();
			const elapsedBySetTimeout = newTime - this.startedAt;

			this.drift = elapsedBySetTimeout - this.expectedTime;
			if (this.drift < 0 && typeof this.errorCallback !== 'undefined') {
				console.error('calling errorcallback');
				console.log('logs:expectedTime', this.expectedTime);
				console.log('logs:newTime', newTime);
				console.log('logs:startedAt', this.startedAt);
				console.log('logs:elapsedBySetTimeout', elapsedBySetTimeout);
				console.log('logs:drift', this.drift);

				// this.errorCallback(this);
			} else {
				console.log('drift', this.drift);
				this.callback();
				this.round(speed - this.drift);
			}
		}, speed - this.drift);
	}
}

export default Timer;
