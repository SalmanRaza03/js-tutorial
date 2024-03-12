//for-of loop


//{[], [], []}
//[{}, {}, {}]//these scenarios are encountered in mainly for-each loop

const arr = [1,2,3,4,5]

for(const i of arr){
    // console.log(i);
}

const greetings = "Hello World!";
for(const greet of greetings){
    // console.log(`Each letter is ${greet}`);
}

//-------------MAPS-------------

//Objects also contain key-value pairs but they do not have them in order i.e., they are unordered
//Maps contain key-value pairs and are ordered. It has only unique keys.

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('SA', "Saudi Arabia")

for(const key of map){
    // console.log(key);
}//gives output as array format
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'SA', 'Saudi Arabia' ]

//to customize it we can use array de-structuring

for(const [key, value] of map){
    // console.log(`${key} : ${value}`);
}

//for Objects
const myObj = {
    'game1' : "NFS",
    'game2' : "GTA5"
}

for(const [key, value] of myObj){
    // console.log(`${key} : ${value}`); 
}
//Objects are not iterable in this way. We will learn it later on.