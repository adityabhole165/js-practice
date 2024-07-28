const coding =["js","ruby","java","python","cpp"]

// coding.forEach( function (val) {} )
coding.forEach(  function(item){ 
        // console.log(item);
}  )
// call back function doesent contain function name 

// coding.forEach( (val) => {console.log(val);} )

function printme(item){
    // console.log(item);
}
// coding.forEach(printme)/*just give reference dont execute */

// coding.forEach((item,index,arr)=>{
//     console.log(item ,index,arr);
// })

const myCod = [
    {
        langName : "JavaScript",
        langFile:  'js'
    },
    {
        langName : "Java",
        langFile:  'java'
    },
    {
        langName : "Python",
        langFile:  'py'
    }
] 

myCod.forEach((item)=>{
    console.log(item.langName);
})