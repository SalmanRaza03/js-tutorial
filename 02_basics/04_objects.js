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
// console.log(obj1);

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

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));//false because there's no key as such as isLoggedOut.

//-----------------------DESTRUCTURING---------------------------------

const course = {
    name: "JavaScript Mastery",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);//normal way of accessing object members
const {courseInstructor} = course;//one way of doing it
// console.log(courseInstructor);

const {price: pr} = course;
// console.log(pr);

const {courseInstructor: ins} = course;
// console.log(ins);

//-----FOR ARRAYS------
const myArr = ['salman', 21, true];
// console.log(myArr[1]);

const [name, age, isLogged] = myArr
// console.log(name)//salman
// console.log(age)//21
// console.log(isLogged)//true

// const [age, isLogged] = myArr
// console.log(age)//salman
// console.log(isLogged)//21

// const [age] = myArr;
// console.log(age);//salman
//if you give only one parameter inside the destructured array, then it will consider only the first index. 
// This is because it starts from index 0 and goes on to match till the last index
// Hence, if you give only 1 parameter, it will take index 0. If you take 2 parameters, it will take index 0 and 1 and so on.

