/*
    There are two types of datatypes, namely, primitive and non-primitive(reference) datatypes.

    Primitive datatypes are: number, string, boolean, null, undefined, symbol, bigint.

    Reference datatypes are: Object, Array, Functions.
*/

let num = 100;//number
let name = "Salman";//string
let isLoggedIn  = true;//boolean
let temperature = null;//null
let isPresent;//also written as let isPresent = undefined;
let value1 = Symbol('123');//symbol
let value2 = Symbol('123');//symbol
let largeNum = 32479837488874n;//bigint

// console.log(typeof num)//number
// console.log(typeof name);///string
// console.log(typeof isLoggedIn);//boolean
// console.log(typeof temperature);//since it is a null value, it returns its type as object
// console.log(typeof isPresent)//undefined
// console.log(typeof value1);//symbol
// console.log(typeof largeNum);//bigint

// console.log(value1);
// console.log(value2);

const heroes = ["ironman", "thor", "hulk", "DrStrange"];//array

let obj = {
    name:"Salman",
    id: 43,
    email:"salman@google.com"
}

function add(a,b){
    return a+b;
}

// console.log(typeof heroes);//object
// console.log(typeof obj);//object
// console.log(typeof add);//Object function

//---------------------------------------------------------------------------------------------------
//Stack Memory is used for primitive datatypes and Heap memory is used for Non-primitive(Reference) datatypes.

//-----------Stack Memory allocation------------
let numValue = 45;
let anotherNum = numValue;
// console.log(anotherNum);
// console.log(numValue);
anotherNum = ++anotherNum;
// numValue += 1;
// console.log(anotherNum);
// console.log(numValue);

//-------------Heap Memory Allocation--------

let myObj = {
    id: 27,
    name: "Salman",
    email: "salman@google.com"
}

let newVar = myObj;
newVar.email = "raza@google.com";
// console.log(typeof newVar);
console.log(newVar);
console.log(myObj.email);




