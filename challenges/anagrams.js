/**
 * ANAGRAMS
 * 
 * - Giving two strings, write a function to determine if the second string is an 
 * anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters
 * of another, such as cinema, formed from iceman
 * 
 * Example:
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 */

/**
 * Using hash-map
 */

const hashMapValidAnagram = (word1, word2) => {

    if (word1 === '' && word2 === '') return true;

    else if (!word1 || !word2) return false;

    let lookUp = {};
    let totalCheck = 0;

    for (let val of word1) {
        // lookUp[val] ? lookUp[val] += 1 : lookUp[val] = 1
        lookUp[val] = (lookUp[val] || 0) + 1;
    }

    for (let val of word2) {
        if (!lookUp[val]) {
            return false
        } else {
            lookUp[val] -= 1;
        }
    }

    for (key in lookUp) {
        totalCheck += lookUp[key]
    }

    if (totalCheck > 0) return false

    return true;
}

const frequencyCounterValidAnagram = (word1, word2) => {
    let frequencyCounterWord1 = {};
    let frequencyCounterWord2 = {};

    for (const val of word1) {
        frequencyCounterWord1[val] = (frequencyCounterWord1[val] || 0) + 1
    }

    for (const val of word2) {
        frequencyCounterWord2[val] = (frequencyCounterWord2[val] || 0) + 1
    }

    for (key in frequencyCounterWord1) {
        if (!(key in frequencyCounterWord2)) return false;

        if (frequencyCounterWord1[key] !== frequencyCounterWord2[key]) return false;
    }

    return true;
}

/**Hash Map */

console.log('test-case 0', hashMapValidAnagram('', ''));
console.log('test-case 1', hashMapValidAnagram('aaz', 'zza'))
console.log('test-case 2', hashMapValidAnagram('anagram', 'nagaram'));
console.log('test-case 3', hashMapValidAnagram('rat', 'car'));
console.log('test-case 4', hashMapValidAnagram('awesome', 'awsom'));
console.log('test-case 5', hashMapValidAnagram('qwerty', 'qeywrt'));
console.log('test-case 6', hashMapValidAnagram('texttwisttime', 'timetwisttext'));

console.log('--------------------------------------------------------------------------')
/**Frequency counter */

console.log('test-case 0', frequencyCounterValidAnagram('', ''));
console.log('test-case 1', frequencyCounterValidAnagram('aaz', 'zza'))
console.log('test-case 2', frequencyCounterValidAnagram('anagram', 'nagaram'));
console.log('test-case 3', frequencyCounterValidAnagram('rat', 'car'));
console.log('test-case 4', frequencyCounterValidAnagram('awesome', 'awsom'));
console.log('test-case 5', frequencyCounterValidAnagram('qwerty', 'qeywrt'));
console.log('test-case 6', frequencyCounterValidAnagram('texttwisttime', 'timetwisttext'));

