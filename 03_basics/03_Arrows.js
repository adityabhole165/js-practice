const user ={
    username : " Aditya",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, wel-come to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this)



// function chai() {
//     let user ="hitesh"
//     console.log(this.user);
// }

// chai()

// const chai = function () {
//     let user = "aditya"
//     console.log(this.user);
// }
const chai = () => {
    let user = "aditya"
    console.log(this);
}

// chai()

// arrow function
// const result = (num1 ,num2) =>{
//     return num1+num2
// }


// implicit function
// const result = (num1 ,num2) => num1+num2

// for react 
// const result = (num1 ,num2) => (num1+num2)


const result = (num1 ,num2) => ({user : "Aditya"})


console.log(result(3,4));