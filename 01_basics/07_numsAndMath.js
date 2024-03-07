"use strict"

const num1 = 100;
// console.log(num);
// console.log(typeof num);

const num2 = new Number(200);
// console.log(num2);

const str = num2.toString();
// console.log(str);
// console.log(typeof str);
// console.log(str.length);

const num3 = 345.5867;
// console.log(num3.toFixed(2));

// console.log(num3.toPrecision(4));

const num4 = 1000000000;
// console.log(num4.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//---------------------------MATHS IN JAVASCRIPT---------------------------------

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(4.68));
// console.log(Math.ceil(5.04));
// console.log(Math.floor(5.89));
// console.log(Math.pow(25,2));
// console.log(Math.min(4,2,4,5,6,43,34));
// console.log(Math.max(4,2,4,5,6,43,34));

// const randomNum = Math.random();//returns a random floating point value within the range 0(inclusive) and 1(exclusive)
// console.log(randomNum);
// console.log(Math.random());
// console.log(Math.random()*10 + 1);//0.044343432 * 10 = 0.44343432. Hence, we add 1 
// console.log(Math.floor((Math.random()*10) +1));

const min = 25;
const max = 30;

console.log(Math.floor((Math.random()*(max - min + 1)) + min));//very impt to generate random numbers between limits(inclusive)



