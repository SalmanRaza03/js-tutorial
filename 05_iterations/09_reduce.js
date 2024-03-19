//reduce is mainly used when creating shopping carts and to add the prices of products in your cart

// array.reduce(
//     (accumulator, currentValue) => (accumulator + currentValue),
//     initialValue)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currValue) {
//     console.log(`accumulator is : ${acc} and current value is ${currValue}`)
//     return acc + currValue;
// }, 0)//0 is the initial value

//using arrow functions

const myTotal = myNums.reduce( (acc, currValue) => (acc + currValue), 0)

// console.log(myTotal)

//-----------shopping cart example-------------

const shoppingCart = [
    {
        courseName : "js course",
        price : 2999
    },
    {
        courseName : "python course",
        price : 999
    },
    {
        courseName : "mobile dev course",
        price : 5999
    },
    {
        courseName : "data science course",
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, currValue) => (acc + currValue.price), 0)
console.log(totalPrice);

