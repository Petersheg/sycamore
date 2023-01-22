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
