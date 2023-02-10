// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

/** Frequency Counter */
const areThereDuplicates = (...args) => {
    let frequency = {};

    for (let val of args) {
        frequency[val] = (frequency[val] || 0) + 1;
        if (frequency[val] > 1) return true;
    }
    return false;
}

console.log('areThereDuplicates(1, 2, 3)', areThereDuplicates(1, 2, 3));
console.log('areThereDuplicates(1, 2, 2)', areThereDuplicates(1, 2, 2));
console.log("areThereDuplicates('a', 'b', 'c', 'a')", areThereDuplicates('a', 'b', 'c', 'a'));

/** Multiple Pointer */
function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

/** One liner solution */

function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}