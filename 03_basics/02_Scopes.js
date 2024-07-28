// let a=10
// const b=20
// var c= 30

// var c=3000

// if (true) {
//     let a=10
//     const b=20
//     // var c= 30
//     // c=30
// }

let a =300
if (true) {
    let a=10
    const b=20
    // console.log("inner a :",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


// console.log(a);


function one() {
    const username= "Aditya"
    
    function two() {
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()\

if (true) {
    const username="Aditya"
    if (username === "Aditya") {
        const website = "  youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++ intersesting +++++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1
}



// addTwo(5)
// const addTwo = function (num) {
//     return num + 2
// }