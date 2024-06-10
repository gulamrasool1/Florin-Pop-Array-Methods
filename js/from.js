// const str = '1234567';

// // [1,2,3,4,5,6,7]

// const res = Array.from(str , mapFn);

// function mapFn(x) {
//     return Number(x);
// }

// console.log(res);


// const numbers = [1,2,3,3,2,1,4,4,3,2,1,5];
const friends = ['Florin', 'Ivan', 'Liam', 'Florin', 'Ivan', 'Jai']

const res = Array.from(new Set(friends));

console.log(res);