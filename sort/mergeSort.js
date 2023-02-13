const mergeTwoSortedArray = (array1, array2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            result.push(array1[i]);
            i++
        } else {
            result.push(array2[j])
            j++
        }
    }

    while (i < array1.length) {
        result.push(array1[i]);
        i++
    }

    while (j < array2.length) {
        result.push(array2[j]);
        j++
    }

    return result;

}

function mergeSort (arr) {
    // Base cait
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeTwoSortedArray(left, right);
}

// console.log(mergeTwoSortedArray([1, 10, 50], [2, 14, 99, 100]))
console.log(mergeSort([10, 24, 76, 73]))