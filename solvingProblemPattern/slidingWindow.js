/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive element in the array.
 */

const maxSubarraySum = (arrayNumbers, number) => {
    if (arrayNumbers.length === 0 || !arrayNumbers || !Array.isArray(arrayNumbers) || arrayNumbers.length < number) return null;

    let tempSum = 0;
    
    for (let i = 0; i < number; i++) {
        tempSum += arrayNumbers[i];
    }
    let maxSum = tempSum;

    for (let j = number; j < arrayNumbers.length; j++) {
        tempSum = tempSum - arrayNumbers[j - number] + arrayNumbers[j];
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum;
}


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null
