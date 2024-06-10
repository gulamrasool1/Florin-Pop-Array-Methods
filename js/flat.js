// const arr = [1,[2,[3,[4]]]]

// // [1,2,3,4];

// const res = arr.flat(3);

// console.log(res);



const arr = [1,[2,[3,[4,[5,[6]]]]]]

// [1,2,3,4,5,6];

const res = arr.flat(Infinity);

console.log(res);