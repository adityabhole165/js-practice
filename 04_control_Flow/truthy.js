// const UserEmail = "h@aditya.ai0"
// const UserEmail = ""
// const UserEmail = "a@gmail.com"
const UserEmail = []

if (UserEmail) {
    console.log("got User email");  

}else{
    console.log("dont have email");
}

// Falasy value

// false ,0, -0, BigInt 0n, "" , null ,undefined , NaN

// truty value
// "0 " ,'false' ," ", [],{}, function(){}

// if(UserEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish coalescing Operator (??) : null Undefined 

let val1;
// val1 =5 ??10
// val1 =null ??10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// terniry Operator 

// condition ? true : false 

const IceTea = 10
IceTea <= 80 ? console.log("less than 80") : console.log("greater than 80");
