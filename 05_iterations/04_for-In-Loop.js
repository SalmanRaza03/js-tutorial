//to iterate over objects we can use for-in loop
//not only objects, we can also iterate over other things using for-in loop

const myObj = {
    js: 'JavaScript',
    py: 'python',
    cpp: 'C++',
    rb: 'ruby'
}

for(const {key, value} in myObj){
    // console.log(`${key} : ${value}`);
}//doing this gives undefined output hence this is not possible using object de-structuring
// undefined : undefined
// undefined : undefined
// undefined : undefined
// undefined : undefined

for(const key in myObj){
    // console.log(key);
}// this gives all the keys as output

for(const key in myObj){
    // console.log(myObj[key]);
}//this gives all the values as output

//by combining both of these, we can get both keys and values

for(const key in myObj){
    // console.log(`${key} : ${myObj[key]}`);
}


//for-in loop for arrays 
const array = ["salman", "raza", "mohammad"]
for(const arr in array){
    // console.log(arr);
}//gives output as the indices
//output is 0 1 2(indices)

//NOTE: for-in loop gives only the keys implicitly, in case of arrays, indices are treated as keys to the particular index, it returns those.

for(const arr in array){
    // console.log(array[arr]);
}//gives values only and not keys

//again combining both of these, we get key and values together

for(const arr in array){
    // console.log(`${arr} : ${array[arr]}`)
}

//trying it for maps

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('SA', "Saudi Arabia")

for(const key in map){
    console.log(map);
}