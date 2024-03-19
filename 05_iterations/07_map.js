
// map() creates a new array by applying a function to each element of the original array.
// It iterates over each element in the array, executes a callback function on each element, and returns a new array 
// with the results of calling the callback function on each element.
//here there is no concept of making changes only if the condition is true and something like that.
// The length of the returned array will be the same as the original array

const myNumbers = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map( (num) => (num+10))
// console.log(newNumbers);


//using forEach loop to implement the same above thing
// const usingForEach = [];
// myNumbers.forEach( (item) => {
//     item = item + 10;
//     usingForEach.push(item);
// })
// console.log(usingForEach);



