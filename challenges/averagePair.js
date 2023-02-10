/**
 * Write a function called averagePair. 
 * Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 */

function averagePair (arrayNumbers, averageNumber) {
    if (arrayNumbers.length < 2 || !Array.isArray(arrayNumbers) || !arrayNumbers || !arrayNumbers) return false;
    let i = 0;
    let j = 1;

    const averageCalc = (numb1, numb2) => (numb1 + numb2) / 2;
    let tempAverage;

    while(i < arrayNumbers.length) {

        tempAverage =  averageCalc(arrayNumbers[i], arrayNumbers[j]);
        if (tempAverage === averageNumber) return true;
        if (j === arrayNumbers.length - 1) {
            i++;
            j = i++;
        } else {
            j++;
        }
    }

    return false;

} 

console.log('averagePair([1,2,3],2.5)', averagePair([1,2,3],2.5));
console.log('averagePair([1,3,3,5,6,7,10,12,19],8)', averagePair([1,3,3,5,6,7,10,12,19],8));
console.log('averagePair([-1,0,3,4,5,6], 4.1)', averagePair([-1,0,3,4,5,6], 4.1));
console.log('averagePair([],4)', averagePair([],4));