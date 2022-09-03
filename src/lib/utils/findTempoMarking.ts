const findTempoMarking = (tempo: number): string => {
	let marking = '';

	if (tempo >= 20 && tempo <= 39) {
		marking = 'Grave';
	}

	if (tempo >= 40 && tempo <= 45) {
		marking = 'Lento';
	}

	if (tempo >= 46 && tempo <= 55) {
		marking = 'Largo';
	}

	if (tempo >= 56 && tempo <= 65) {
		marking = 'Adagio';
	}

	if (tempo >= 66 && tempo <= 70) {
		marking = 'Adagietto';
	}

	if (tempo >= 71 && tempo <= 73) {
		marking = 'Andante Moderato';
	}

	if (tempo >= 74 && tempo <= 78) {
		marking = 'Andante';
	}

	if (tempo >= 79 && tempo <= 83) {
		marking = 'Andantino';
	}

	if (tempo >= 84 && tempo <= 85) {
		marking = 'Marcia Moderato';
	}

	if (tempo >= 86 && tempo <= 95) {
		marking = 'Moderato';
	}

	if (tempo >= 96 && tempo <= 110) {
		marking = 'Allegretto';
	}

	if (tempo >= 111 && tempo <= 120) {
		marking = 'Allegro Moderato';
	}

	if (tempo >= 121 && tempo <= 132) {
		marking = 'Allegro';
	}

	if (tempo >= 133 && tempo <= 141) {
		marking = 'Vivace';
	}

	if (tempo >= 142 && tempo <= 151) {
		marking = 'Vivacissimmo';
	}

	if (tempo >= 152 && tempo <= 168) {
		marking = 'Alegrissimmo';
	}

	if (tempo >= 169 && tempo <= 200) {
		marking = 'Presto';
	}

	if (tempo >= 201 && tempo <= 240) {
		marking = 'Prestissimo';
	}

	return marking;
};

export default findTempoMarking;
