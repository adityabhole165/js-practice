// # Primitive

// 7 types : string ,Number ,Boolean , Null , undefined , symbol ,BigInt 


// # Reference (Non Primitive) 
//  Array , Objects , Functions  ,


// const score = 100
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol ('123')
// console. log(id === anotherId);


// const bigNumber = 35689945489878555n


// Arrays 
const characters =["naruto" ,"sasuke","sakura"]

// Objects 
let myObj ={
    name: "aditya",
    age:22,
}

// functions 
const helloo = function hello() {
        // console.log("hello ");
}


// console.log(typeof scoreValue);

// ++++++++++++++++++++++++++++++++++++++
// stack (Primitive ), Heap (non -primitive )
let myYoutube ="hitesh"

let anothername = myYoutube
anothername = "chaiaurcode"

console.log(myYoutube);
console.log(anothername);
// creates the copy
// when we put the value in  stack it gives the copy of variable is known as call by value 


let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "aditya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// the object call the data by using call by reference it stores in the heap means non primitive data stores in  heap 