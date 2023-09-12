// array 

const array = [1, 2, 3, 4, 5]

const myArr = new Array(1, 2, 3, 4, 5)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);
