// const tinder = new Object() /*singleton object */
const tinderUser = {} /* non - singleton object */

tinderUser.id = "123abc"
tinderUser.name = "aditya"
tinderUser.isloggedIn = false
// console.log(tinder);
// console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        userFullName:{
            FirstName : "Aditya",
            LastName : "Bhole"
        } 
    }
}

// console.log(regularUser.fullname.userFullName.FirstName);

const obj1={
    1:"a",
    2: "b"
}
const obj2={
    3:"c",
    4: "d"
}
const obj5={
    5:"c",
    6: "d"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2,...obj5}
// console.log(obj3);

const user =[ {
    id :1,
    email:"aditya@gmail.com"

},
{
    id :1,
    email:"aditya@gmail.com"

},
{
    id :1,
    email:"aditya@gmail.com"

},
{
    id :1,
    email:"aditya@gmail.com"
}
]
    
// console.log(user[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('islogged'));

const course =  {
        coursename : "js",
        price :"999",
        courseinstructor : "hitesh"
}
// course.courseinstructor

const{courseinstructor :instructor} =course

// console.log(courseinstructor);
console.log(instructor);

// {
//     "name" :"hitesh",
//     "coursename":"js",
//     "price":"free"
// }

[   {},
    {},
    {}
]
    



