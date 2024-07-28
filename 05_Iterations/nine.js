const myNums = [1,2,3]

// myTotl = myNums.reduce( function ( acc, currVal ) {
//     console.log(`acc : ${acc} and currval : ${currVal}`);
//     return acc + currVal
// },3)


const myTotl = myNums.reduce( (acc,currval) => acc + currval , 0 )

console.log(myTotl);

const ShoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "py course",
        price : 999,
    },
    {
        itemName : "mobile dev course",
        price : 5999,
    },
    {
        itemName : "mobile dev course",
        price : 12999,
    },

]

const priceTOpay = ShoppingCart.reduce( (acc,item) => acc+ item.price ,0)

console.log(priceTOpay);