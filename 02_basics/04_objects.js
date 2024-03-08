//to create singleton objects, we need to use the constructor
// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "samantha"
tinderUser.email = "sam@google.com"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const randomUser = {
    email:"random@gmail.com",
    fullname: {
        username: {
            firstname: "salman",
            lastname: "raza"
        }
    }
}
// console.log(randomUser.fullname.username.firstname);//salman

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {...obj1, ...obj2};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const arrayOfObjects = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "def"
    },
    {
        id: 3,
        name: "ghi"
    }
]

// console.log(arrayOfObjects[1].name);
// console.log(arrayOfObjects[2].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLoggedOut'));//false because there's no key as such as isLoggedOut.