"use strict"

// try{
//     alert("This is an alert message");
// }catch(e){
//     console.log("Error Occurred", e.message);
// }
// console.log("Hello");
// console.log("Heya")

/*
    number, bigint
    string,
    boolean => basically they have true and false values,
    symbol => used mainly in react when you need to identify the uniquety of the components,
    null,
    undefined
*/
const num = 45;
const sym = Symbol('123');
const isLoggedIn = true
const name = "salman"
const largeInt = 23453435454n;

console.log(typeof null);//object
console.log(typeof undefined)//undefined
console.log(typeof sym)//symbol
// console.log(typeof Boolean)//function
// console.log(typeof Number)//function
// console.log(typeof String)//function
// console.log(typeof BigInt)//function
console.log(typeof isLoggedIn)//boolean
console.log(typeof num)//number
console.log(typeof name)//string
console.log(typeof largeInt)//bigint

console.log("Learnt Datatypes");