//arrays

const arr1 = [0, 1, 2, 3, 4, "salman", false];
// console.log(arr1);
// console.log(arr1[5]);//accessing array elements
// console.log(arr1['5']);//the elements can also be accessed in this way
// console.log(arr1["one"]);//this way of accessing is not possible in javascript

const arr2 = new Array(1, 2, 4, "raza", true);
// console.log(arr2);

const myHeroes = ["ironman", "thor", "loki", "hulk", "Spiderman"];
// console.log(myHeroes);

//array methods
arr1.push("raza");//pushes an element to the back of the array
arr1.pop();//pops an element from the back of the array
arr1.shift();//removes an element from the front of the array
arr1.unshift(0);//adds an element to the front of the array
// console.log(arr1);

// console.log(arr1.includes(3));
// console.log(arr1.indexOf("salman"));//if the given element is not present, then it returns -1.
// console.log(arr1.length);
// const myArray = arr1.join();
// console.log(myArray);//it is of type string
// console.log(typeof myArray);//string
// console.log(arr1);

//slice and splice

const newArray = [0, 1, 2, 3, 4, 5];
console.log("Initial array Before Slice or Splice: ",newArray);//Initial array Before Slice or Splice:  [ 0, 1, 2, 3, 4, 5 ]

const myNewArray1 = newArray.slice(1,4);
console.log("After Slice: ", myNewArray1);//After Slice:  [ 1, 2, 3 ]
console.log("Initial array after slice: ", newArray);//Initial array after slice:  [ 0, 1, 2, 3, 4, 5 ]

const myNewArray2 = newArray.splice(1,4);
//splice removes a portion of the array as mentioned in the parameters(both upper and lower bound inclusive)
//the new array is altered with splice such that it does not contain the elements that are spliced.
console.log("After splice: ", myNewArray2);//After splice:  [ 1, 2, 3, 4 ]
console.log("Initial array after splice: ", newArray);//Initial array after splice:  [ 0, 5 ]
