/**
 * Implement a function called countUniqueValues,
 *  which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 */

const countUniqueValues = (arrayOfValue) => {
    let uniqueArrays = [];

    for (const val of arrayOfValue) {
        if (!uniqueArrays.includes(val)) {
            uniqueArrays.push(val);
        }
    }

    return uniqueArrays.length;

}

console.log('test-case 0', countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log('test-case 1', countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log('test-case 2', countUniqueValues([]))
console.log('test-case 3', countUniqueValues([-2, -1, -1, 0, 1]))