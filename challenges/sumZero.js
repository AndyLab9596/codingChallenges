/**
 * Write a function called sumZero which accepts a sorted array of integers. 
 * The function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

const sumZero = (arrayOfNumbers) => {
    let leftPointer = 0;
    let rightPointer = arrayOfNumbers.length - 1;

    while (leftPointer < rightPointer) {
        let sum = arrayOfNumbers[leftPointer] + arrayOfNumbers[rightPointer]
        if (sum === 0) {
            return [arrayOfNumbers[leftPointer], arrayOfNumbers[rightPointer]];
        } else if (sum > 0) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }

    return undefined;
};

console.log('test-case 0', sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3];
console.log('test-case 1', sumZero([-2, 0, 1, 3])) // undefined
console.log('test-case 2', sumZero([1, 2, 3])) // undefined
