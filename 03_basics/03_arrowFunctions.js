//The global object in the case of browser is 'Window' object

const user = {
    name: "salman",
    age: 18,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our website`);
    }
}
// console.log(user);
// user.welcomeMessage();
// user.name = "raza";
// user.welcomeMessage();
// console.log(user);

// function chai(){
//     let userName = "salman"
//     console.log(this.userName);//outputs undefined.
// }
// chai()

// const variable = function(){
//     let userName = "salman"
//     console.log(this.userName);
// }
// variable();


// ------------------------ARROW FUNCTIONS------------------------------

// const addTwoNumbers = (num1, num2) => {//when you use {}, you have to return something explicitly for sure.
//     return num1 + num2;
// }
// console.log(addTwoNumbers(3,4));

// const addTwoNumbers = (num1, num2) => num1 + num2//here no need to write return as it is considered a single exp. You can wrap with ()
// const addTwoNumbers = (num1, num2) => (num1 + num2)
// console.log(addTwoNumbers(3,4));


//In case of objects,

const addTwoNumbers = (num1, num2) => ({username: "sal"})
console.log(addTwoNumbers(3,4));
