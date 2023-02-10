// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(digit1, digit2) {
    if (!Number.isInteger(digit1) || !Number.isInteger(digit2)) return false;

    const transformDigit1 = digit1.toString().split('');
    const transformDigit2 = digit2.toString().split('');

    const frequency1 = {};
    const frequency2 = {};

    for(const val of transformDigit1) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }

    for(const val of transformDigit2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    for (let key in frequency1) {
        if (!(key in frequency2)) return false;

        if (frequency1[key] !== frequency2[key]) return false;
    }

    return true;

}

console.log('test-case 0', sameFrequency(182,281));
console.log('test-case 1', sameFrequency(34,14));
console.log('test-case 2', sameFrequency(3589578, 5879385));
console.log('test-case 3', sameFrequency(22,222));