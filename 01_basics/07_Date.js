// Dates

let myDate = new Date()
// console.log(myDate.toString());
// //Output : Tue Jul 16 2024 21:20:52 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());
// // Output :Tue Jul 16 2024

// console.log(myDate.toISOString());
// // Output :2024-07-16T15:50:52.091Z

// console.log(myDate.toLocaleString());
// Output :16/7/2024, 9:20:52 pm

// let myCreatedDate = new Date(2024,6,18)
// let myCreatedDate = new Date(2024,6,18,5,3)
let myCreatedDate = new Date("2024-07-18")
// let myCreatedDate = new Date("01-14 -2023")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDay());
// console.log(newDate.getMonth().toString());


newDate.toLocaleString('default',{
    weekday:"long",

})
