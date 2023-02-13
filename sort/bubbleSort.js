const swapFnc = (i, j, a) => [a[i], a[j]] = [a[j], a[i]];

const bubbleSort = (array) => { 
    let noSwap = true;
    
    for (let i = array.length - 1; i > 0; i--) {    

        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapFnc(j, j + 1, array);
                noSwap = false
            }
        }

        if (noSwap) break;
    }

    return array;
}

console.log(bubbleSort([34, 45, 29, 8]))