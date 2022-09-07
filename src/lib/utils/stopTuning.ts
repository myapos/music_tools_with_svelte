interface stopTuningT {
	startedTuningCtx: { [key: string]: any };
	context: { [key: string]: any };
	isTuning: boolean;
}

const stopTuning = ({ startedTuningCtx, context, isTuning }: stopTuningT) => {
	if (isTuning) {
		context.update((ctx: any) => {
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
