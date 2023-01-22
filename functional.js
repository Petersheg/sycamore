// * Question: The sum of the squares of the first ten natural numbers is: 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is: (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function difference(n) {
    let sumOfSquares = 0;
    let squareOfSum = 0;
    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
        squareOfSum += i;
    }
    squareOfSum = squareOfSum * squareOfSum;
    return squareOfSum - sumOfSquares;
}
// console.log(difference(4)); // 70;


// * Question: write a function to Count Total number of zeros from 1 upto n
// i.e when n = 10
// countZero(n) returns 1
// (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) - 1 zero between 1 and 10.
// n can be any positive natural number

function countZero(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let num = i;
        while (num > 0) {
            if (num % 10 === 0) {
                count++;
            }
            num = Math.floor(num / 10);
        }
    }
    return count;
}
// console.log(countZero(100)); // 11


// Question: How would you create all permutation of a string
// i.e when string = "str"
// permutations(string) returns [ 'str', 'srt', 'tsr', 'trs', 'rst', 'rts' ]

function permutations(str) {
    let result = [];
    if (str.length === 1) {
        return [str];
    }
    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let charsLeft = str.substring(0, i) + str.substring(i + 1);
        let innerPermutations = permutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            result.push(firstChar + innerPermutations[j]);
        }
    }
    return result;
}
console.log(permutations("pet")); // [ 'pet', 'pte', 'ept', 'etp', 'tpe', 'tep' ]
