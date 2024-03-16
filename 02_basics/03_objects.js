//Objects can be declared or created in two ways: either using literals or using constructor
//while using constructor, a singleton is created and this doesn't happen in the case of literals

//Object.create  ----> this gives us a singleton object 

const mySym = Symbol("myKey1");
const myObj = {
    name: "Salman",
    "full name": "Salman Raza",
    [mySym]: "myKey1",//this is the syntax to give symbol as a key
    email: "salman@google.com",
    age: 20,
    isLoggedIn: false
};
// console.log(myObj);

// console.log(myObj.name);
// console.log(myObj["email"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);

//to modify contents of the object

myObj.age = 18;
// console.log(myObj["age"]);
myObj.email = "salman@microsoft.com";
//to lock the object so that no one can further change it, we use the freeze property
// Object.freeze(myObj);
myObj.email = "salman@amazon.com";
// console.log(myObj);

myObj.id = 27;//adding a new key and value to the existing object
// console.log(myObj);

myObj.greeting = ()=>{
    console.log("Hello User");
}

// console.log(myObj.greeting);//[Function (anonymous)]
// console.log(myObj.greeting());//Hello User

myObj.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}

// console.log(myObj.greetingTwo());
