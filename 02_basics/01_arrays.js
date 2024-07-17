// arrays

const myArray = [0 , 1 , 2 , 3 , 4 , 5 ]

const myHeros = ["naruto" , "Gojo "]
const myArry2 = new Array(1,2,3,4)
// console.log(myArray[3]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// slice ,splice

console.log("A " , myArray);

const my1 = myArray.slice(1,3)

console.log(my1);
console.log("B" , myArray);


const my2 = myArray.splice(1,3)
console.log("C" , myArray);
console.log(my2);