const displayNote = () => {
	var indexf1 = -1;
	var indexf2 = -1;
	var nearestIndex = -1;

	//goalfrequency=6644.00;
	// console.log('goalfrequency:' + goalfrequency);
	/*search for goal frequency in map arrays*/

	// 	$.each(map, function (index1, value1) {
	// 		$.each(map[index1], function (index2, value2) {
	// 			/*Map contains two types of data. Notes as strings and frequencies as numbers. We check for goalfrequency
	// only in numbers. Then we get the corresponding string of that number*/

	// 			if ($.type(map[index1][index2]) === 'number') {
	// 				//if value is found
	// 				if (map[index1][index2] == goalfrequency) {
	// 					console.log('found goal frequency in map[' + index1 + '][' + index2 + ']');
	// 					console.log('Matching note is:' + map[index1][0]);
	// 					$(noteString).text(map[index1][0]);

	// 					deviation = goalfrequency - map[index1][1];
	// 					console.log('Tone is:' + map[index1][0] + ' with deviation:' + deviation);
	// 					indexf1 = index1;
	// 					indexf2 = index2;
	// 					if (Math.abs(deviation) < thresholdcolordeviation) {
	// 						$('#noteString').css({ color: 'green' });
	// 						$('#my_protractor').css({ border: '5px solid green' });
	// 					} else {
	// 						$('#noteString').css({ color: '#666600' });
	// 						$('#my_protractor').css({ border: '5px solid #999967' });
	// 					}
	// 				}
	// 				console.log('indexf1 :' + indexf1);
	// 			}
	// 			/**/
	// 		});
	// 	});

	// 	/*if value is not found then indexf1 and idexf2 has the default values -1. So we are searching for nearest values in map array*/
	// 	if (indexf1 == -1) {
	// 		console.log('Matching note does not exist in map. Calculating the nearest value');

	// 		nearestIndex = calculateNearestValue();
	// 		$(noteString).text(map[nearestIndex][0]);
	// 		deviation = goalfrequency - map[nearestIndex][1];
	// 		console.log('Nearest tone is:' + map[nearestIndex][0] + ' with deviation:' + deviation);
	// 		if (Math.abs(deviation) < thresholdcolordeviation) {
	// 			$('#noteString').css({ color: 'green' });
	// 			$('#my_protractor').css({ border: '5px solid green' });
	// 		} else {
	// 			$('#noteString').css({ color: '#666600' });
	// 			$('#my_protractor').css({ border: '5px solid #999967' });
	// 		}
	// 		/**/
	// 	}

	// 	thetadeviation = calculateDeviationDegrees(deviation);
	// 	myRotate(thetadeviation);
};

export default displayNote;
