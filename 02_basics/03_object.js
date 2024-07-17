// singleton
// object.create
// object literals

const mySym = Symbol("key1 ")

const Jsuser = {
    name : "aditya",
    "full name ":"Aditya Bhole ",
    age : 18,
    [mySym] :"key1",
    location :"jaipur",
    email : "adityabhole0304@gmail.com",
    isLoggedIn :false,
    lastLogginDays : ["monday","saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name "]);
// console.log(Jsuser.mySym);
// console.log(typeof Jsuser.mySym);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "Aditya@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "aditya@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function () {
        console.log("hello js user");
}
Jsuser.greetingTwo = function () {
        console.log("hello js user , ${this.name}");
}
// console.log(Jsuser.greeting());
// Jsuser.greeting()
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());