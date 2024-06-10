// const numbers = [-1,1,2,3,4,5];

// const res = numbers.every(isPositive);

// function isPositive(item) {
//     return item > 0;
// }

// console.log(res);


// const persons = [
//     {
//         name: 'Florin'
//     },
//     {
//         name: 'Ivan'
//     },
//     {
//         name: 'Liam'
//     },
//     {
//         name: 'Jai'
//     }
// ];

// const res = persons.every(person => person.name !== undefined)

// console.log(res);



const arrys = [[1,2,3], [4,5,6], '123'] 

const res = arrys.every(arr => Array.isArray(arr));

console.log(res);