//IMMEDIATELY INVOKED FUNCITON EXPRESSIONS

//IIFE are basically used to immediately invoke a particular function.
//sometimes, it happens that, you need to connect to a database immediately while execution, then iife is used

// ------NOTE---------
//In interview, you need to answer about iife as follows:
//In order to avoid any kind of pollution due to global variables, functions etc, iife is used

//normal function
function connect(){
    console.log("DB CONNECTED")
}

// connect();

//iife is as follows
(function connect(){
    console.log("DB CONNECTED")
})();//here the function definition is written within the call itself.(KEEP IN MIND THE SEMICOLON(;))

//while writing two iife functions, make sure to take care about the ';'(semicolon) explicitly to separate them

// (function name(){
//     console.log("My name is Salman");
// })()

((name) => {
        console.log(`My name is ${name}`);
})('salman')
