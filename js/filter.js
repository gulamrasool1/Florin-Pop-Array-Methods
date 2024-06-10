// const numbers = [1,2,3,4,5,6]

// const even = numbers.filter(isEven)

// function isEven(value) {
//     return value % 2 ===0;
// }
// console.log(even);


// const people = [
//     {
//         name: 'Florin',
//         age: 26
//     },
//     {
//         name: 'Ivan',
//         age: 18
//     },
//     {
//         name: 'Jai',
//         age: 15
//     }
// ];

// const adults = people.filter(person => person.age >= 18);

// console.log(adults);


const numbers = [1,2,3,,2,1,3,3,5,4,6];

const nums = numbers.filter((value, index, arr)=> {
    return arr.indexOf(value) === index;
});

console.log(nums);