/**
 * 
 * Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string 
form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

function isSubsequence(subString, string) {
    const arrayOfString = string.split('');
    let j = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
        if (j === subString.length - 1) return true;
        if (arrayOfString[i] === subString[j]) {
            j++
        }
    }

    return false;
}

console.log("isSubsequence('hello', 'hello world')", isSubsequence('hello', 'hello world'));
console.log("isSubsequence('sing', 'sting')", isSubsequence('sing', 'sting'));
console.log("isSubsequence('abc', 'abracadabra')", isSubsequence('abc', 'abracadabra'));
console.log("isSubsequence('abc', 'acb')", isSubsequence('abc', 'acb'));

/** Recursive Solution */
function isSubsequenceRecursive(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}