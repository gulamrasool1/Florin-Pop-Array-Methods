// const numbers = [1,2,3,4,5];

// numbers.fill(0);
// // numbers.fill(0, 1, 4);

// console.log(numbers);


function fillInNumbers(n) {
    return Array(n).fill(0).map((_, idx) => idx +1);
}

console.log(fillInNumbers(50));