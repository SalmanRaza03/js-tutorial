/*console.log(5 > 4);
console.log(5 < 4);
console.log(5 >= 4);
console.log(5 <= 4);
console.log(5 == 4);
console.log(5 != 4);
*/

console.log("2" > 1);//true
console.log("2" > true);//true => here true gets converted into number which is 1. Hence, the output is true
console.log("1" > "");//true => here empty string is considered as 0 when converted to number, hence the output is true
console.log("2" === 2);//false => here, the 2 is not typecasted into a common type, rather it is compared as it is, hence the output

/* 
when using strictly equal to(===) and not strictly equal to(!==) operators, the value is not typecasted into common type and is compared as it is, unlike normal equal to and not equal to operators.
*/
