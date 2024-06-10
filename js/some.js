// const numbers = [1,2,3,4,5];

// const res = numbers.some(greaterThanFour);

// function greaterThanFour(item) {
//     return item > 4;
// }
 
// console.log(res);


const persons = [
    {
        name: 'Florin',
        age: 25
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 15
    }
];

const res = persons.some(isAdults);

function isAdults(person) {
    return person.age >= 18;
}

console.log(res);