// -----------CHAINING-----------------

//the result of the one of the method obtained in chaining is passed on to the next method.

const myNumbers = [1 ,2 ,3, 4, 5, 6,7, 8, 9, 10];
const newNums = myNumbers
                    .map((num) => {return num * 10})
                    .map((num) => (num + 1))
                    .map((num2) => (num2 + 2))
                    .filter((num) => (num > 50))
                    .filter((num2) => (num2 > 80))//and so on chaining can be applied
console.log(newNums)