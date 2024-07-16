const name = "aditya"
const repoCount = 52

// console.log(name + repoCount);

console.log(`hello my name is ${name } and my repo is ${repoCount}`);

const gamename = new String(`     Aditya     `)
// console.log(gamename.length);
// console.log(gamename.toUpperCase());

const newStr = gamename.substring(0,3)
// console.log(newStr);

// console.log(gamename.charAt(1));
// console.log(gamename.indexOf(`t`))

const anotherString = gamename.slice(0,4)
const newAnotherString = gamename.slice(-8,4)
// console.log(anotherString);
// console.log(newAnotherString);

const myName= "  aditya    "
console.log(myName)
console.log(myName.trim());

const url = "https://aditya.com/aditya%20Bhole"
console.log(url.replace('%20',' -'))


console.log(url.includes('aditya'));

const web =" aditya - bhole - website "

console.log(web.split('-'));




