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

console.log('test-case 0', frequencyCounterValidAnagram('', ''));
console.log('test-case 1', frequencyCounterValidAnagram('aaz', 'zza'))
console.log('test-case 2', frequencyCounterValidAnagram('anagram', 'nagaram'));
console.log('test-case 3', frequencyCounterValidAnagram('rat', 'car'));
console.log('test-case 4', frequencyCounterValidAnagram('awesome', 'awsom'));
console.log('test-case 5', frequencyCounterValidAnagram('qwerty', 'qeywrt'));
console.log('test-case 6', frequencyCounterValidAnagram('texttwisttime', 'timetwisttext'));