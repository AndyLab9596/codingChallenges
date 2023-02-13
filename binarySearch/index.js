let array = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]; //20

const binarySearch = (array, val) => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((right + left) / 2);

    while (array[middle] !== val && left <= right) {
        if (array[middle] < val) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }

    return array[middle] === val ? middle : -1
}


console.log(binarySearch(array, 9)) // -1