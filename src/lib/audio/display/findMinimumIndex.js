function findMinimumIndex(arr) {
	/*initializations*/
	var tempminOfArray = 100000;
	var tempIndex = -1;

	arr.forEach((value1m, index1m) => {
		arr[index1m].forEach((value2m, index2m) => {
			if (typeof arr[index1m][index2m] === 'number') {
				/**/

				if (arr[index1m][index2m] <= tempminOfArray) {
					tempminOfArray = arr[index1m][index2m];
					tempIndex = index1m;
				}
			}
		});
	});
	return tempIndex;
}

export default findMinimumIndex;
