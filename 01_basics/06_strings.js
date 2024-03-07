"use strict"

const name = "salman";
const repoCount = 30;

// console.log("My name is " + name + " and my repoCount is " + repoCount);

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const myName = new String('Salman Raza');
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(5));
// console.log(myName.indexOf(' '));
// console.log(myName.indexOf("aza"));//8 is the output
// console.log(myName.length);

const myNewName = new String("SalmanRaza");
// console.log(myNewName.substring(1,6));

//usage of slice method in strings
/*console.log(myNewName.slice(1,5));//alma
console.log(myNewName.slice(5,-1));//nRaz
console.log(myNewName.slice(-4,8));//Ra
console.log(myNewName.slice(-4,-1));//Raz
*/

//trim method
const myString = "     Salman     ";
// console.log(myString);
// console.log(myString.trim());

const anotherString = "Salman Raza is currently unemployed";
console.log(anotherString.replace('Raza', 'khan'));//only replaces the first occurrence of the given argument
console.log(anotherString.replaceAll('Raza', 'Khan'));//replaces all the places having 'Raza'
console.log(anotherString.includes('unemployed'));

console.log(anotherString.split(' '));

//startsWith("Salman") and endsWith("Raza")------- The output is true for both of them, they return a boolean value

//