interface stopTuningT {
	startedTuningCtx: { [key: string]: any };
	audioContenxt: { [key: string]: any };
	isTuning: boolean;
}

const stopTuning = ({ startedTuningCtx, audioContenxt, isTuning }: stopTuningT) => {
	if (isTuning) {
		audioContenxt.update((ctx: any) => {
			try {
				ctx.close();
				return ctx;
			} catch (e) {
				console.error('error', e);
			}
		});

		startedTuningCtx.update((prev) => {
			return false;
		});
	}
};

export default stopTuning;
