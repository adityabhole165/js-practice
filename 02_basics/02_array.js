const marvel_heros = ["thor" , " Iron Man" ,"captain america"]
const dc_heros = ["super man " , " wonder women " , "bat man"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// concat
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread
const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, 4,[5,6,7], 8,[9,10,[11,12]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "aditya"})) //interesting

let score1 =100
let score2 =200
let score3=300
console.log(Array.of(score1,score2,score3));