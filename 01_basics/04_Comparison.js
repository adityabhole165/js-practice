// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/*  console.log(null > 0 );
console.log( null == 0);
console.log( null >= 0); */
// Note the reason is that an equality check == and Comparisons > < >= <= work differently .
// Compraisons convert null to a number , is as 0 . that's why (3) null >= 0 is true and (1) null > 0 is false

/* console.log( undefined == 0);
console.log( undefined > 0);
console.log( undefined < 0); */

// === -> strict check
// this do not convert data types this also check the data types are also equal or not

console.log("2" === 2);
