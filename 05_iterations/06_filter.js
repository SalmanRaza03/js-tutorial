const coding = ["javascript", "cpp", "python", "ruby", "java"];

// console.log(coding);

const values = coding.forEach( (item) => {
    if(item === "ruby"){
        return 0;
    }
    // console.log(item);
})

// console.log(values);//output is undefined because forEach loop doesn't return anything even if you use the return statement

//-------------------------FILTER METHOD-------------------------------------

// filter() creates a new array with all elements that pass the test implemented by the provided function.
// It iterates over each element in the array, executes a callback function on each element, and returns a new array 
// with only the elements for which the callback function returns true.
// The length of the returned array might be different from the original array if any elements fail the test.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => (num > 4));
const newNums = myNums.filter( (num) => {
    return num>4;
});

// console.log(newNums);

//how to do the same thing using forEach loop

const anotherNums = [];
myNums.forEach( (num) => {
    if(num > 4){
        anotherNums.push(num);
    }
})
// console.log(anotherNums);


// ---------------------------------------------------------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let myBooks = books.filter( (bk) => bk.genre === 'History')
myBooks = books.filter( (bk) => (bk.publish > 2000))
myBooks = books.filter( (bk) => {return bk.publish > 1995 && bk.genre === "History"})

// console.log(myBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map( (num) => num+10)
console.log(newNumbers);//if you try to make changes using filter method, it cannot do that, it only filters the data.
//to make any changes to the data, we make use of map function.
console.log(myNumbers);