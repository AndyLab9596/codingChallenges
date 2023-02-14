const swapFnc = (i, j, a) => [a[i], a[j]] = [a[j], a[i]];
const array = [29, 10, 14, 37, 14];

const pivot = (array, start = 0) => {
    let pivot = array[start];
    let swapIdx = start;

    for (let i = start + 1; i < array.length; i++) {
        if (pivot > array[i]) {
            swapIdx++;
            swapFnc(array, swapIdx, i);
        }
    }

    swapFnc(array, start, swapIdx);

    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr
}

console.log(quickSort([4, 6, 9, 1, 5, 3]))
