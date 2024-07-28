// if

// if (condition){
    
// }
// if (true){

// }
// if (false){

// }

// const isUserloggedIn =true
// if (isUserloggedIn) {
    
// }

// < ,> , <= ,>= , == , != , === ,!==

// = -> Assign
// == ->cheack equality
//  === -> cheaks the type  2 == "2"

// if (2 === "2") {
//     console.log("executed");
// }

// if (2 != 3) {
//     console.log("executed");
// }

// const temperature =41 
// if ( temperature === 41) {
//     console.log("less than 50");
// }
// console.log(" temperature is greater than 50   ")


// const temperature =41 
// if ( temperature === 42) {
//     console.log("less than 50");
// }else{
//     console.log(" temperature is greater than 50   ")
// }


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user Power ${power}`);
// }
// console.log(`user Power ${power}`);


// const balance = 1000
// if (balance) console.log("test"),console.log("test2");

// if (balance < 500 ) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInGoogleForms = false
const LoggedInFromEmail =true

if (UserloggedIn && debitCard && 2===2 && loggedInGoogleForms) {
    console.log("Allow to buy Course");
    
}

if (loggedInGoogleForms || LoggedInFromEmail ){
    console.log("user logged in");
}