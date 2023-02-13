const swapFnc = (i, j, a) => [a[i], a[j]] = [a[j], a[i]];


const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        let smallest = i;

        for (let j = i + 1; j < array.length; j++ ) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }

        if (smallest !== i) {
            swapFnc(i, smallest, array);
        }
    }

    return array;
}

console.log(selectionSort([37, 45, 29, 8]))