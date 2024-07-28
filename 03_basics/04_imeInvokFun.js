(function chai() {
    // named iife
    console.log(`DB connected`);
})();

((name) =>{
    // unnamed iife
    console.log(`DB connected Two ${name}`);
})('aditya')