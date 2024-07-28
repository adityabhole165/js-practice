const myObj ={
    js: 'javaScript',
    cpp :'C++',
    rb : "ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} Shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

//  Map is not iteratable using Forin loop
