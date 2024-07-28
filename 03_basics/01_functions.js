

function SayMyName () {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
// SayMyName()

// function AddTwoNumbers(number1 ,number2) {
    
//     console.log(number1+number2);
// }
function AddTwoNumbers(number1 ,number2) {
    
    // let result =number1+number2
    // // console.log("aditya");
    // return result
    return number1+number2
}

// AddTwoNumbers(3,4)
// AddTwoNumbers(3,"4")
// AddTwoNumbers(3,"a")
// AddTwoNumbers(3,null)

const result = AddTwoNumbers(3,5)
// console.log("Result : ",result);

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }


// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username) {
//     if (!username) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// Default Value of username 
function loginUserMessage(username = "Tommy") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}



// const data = loginUserMessage("Aditya")
// console.log(data);
// console.log(loginUserMessage("Aditya"));


// function calculateCartPrice(num1){
//     return num1
// }

// function calculateCartPrice(...num1){
//     return num1
// }


function calculateCartPrice(val1 ,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,300,400,2000));

const user ={
    user : "aditya",
    price : 499
}

function handleObjects(anyobject) {
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`);
    
}

handleObjects(user)

const myarry = [200,400,300]

function returnSecondValue(getarray) {
    return getarray[1]
}

// console.log(returnSecondValue(myarry));
console.log(returnSecondValue([200,400,500,1000]));

