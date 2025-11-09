function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;  // If the array is empty or contains only one element, the array is already sorted.
	}
	const mid = Math.floor(arr.length / 2); // Find the midpoint of the array to split it in half
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);
	return merge(mergeSort(left), mergeSort(right)); // Recursively call merge sort on the both halves of the array then merge the two halves together
}

function merge(arr1, arr2) {
	const mergedLength = arr1.length + arr2.length;
	const merged = new Array(mergedLength);

	let i = 0;
	let j = 0;
	let k = 0;

	while (i < arr1.length && j < arr2.length) {
        // Add elements to the sorted array starting with the smallest one from both arrays
		if (arr1[i] < arr2[j]) {
			merged[k] = arr1[i];
			i++;
		} else {
			merged[k] = arr2[j];
			j++;
		}
		k++;
	}

    // Add any leftover elements to the merged array

	while (i < arr1.length) {
		merged[k] = arr1[i];
		i++;
		k++;
	}

	while (j < arr2.length) {
		merged[k] = arr2[j];
		j++;
		k++;
	}
	return merged;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
