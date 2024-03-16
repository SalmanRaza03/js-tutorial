//arrays part-2

const marvel_heroes = ["Hulk", "Thor", "Vision", "Wanda"];
const dc_heroes = ["Superman", "Batman", "Flash", "Shazam"];

// console.log(marvel_heroes);
// console.log(dc_heroes);

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);// ['Hulk','Thor','Vision','Wanda',[ 'Superman', 'Batman', 'Flash', 'Shazam' ]]

// console.log(marvel_heroes[4][1]);//Batman
marvel_heroes.pop();
const allHeroes = marvel_heroes.concat(dc_heroes);//concat returns a new array unlike push and pop
// console.log(allHeroes);//output
// [
//     'Hulk',     'Thor',
//     'Vision',   'Wanda',
//     'Superman', 'Batman',
//     'Flash',    'Shazam'
// ]

//SPREAD OPERATOR
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
const allOfMyHeroes = [...marvel_heroes, ...dc_heroes];

// console.log(allOfMyHeroes);//output
// [
//     'Hulk',     'Thor',
//     'Vision',   'Wanda',
//     'Superman', 'Batman',
//     'Flash',    'Shazam'
// ]

const username = "salman raza"
let letters = [...username]
// console.log(letters);//output
// [
//     's', 'a', 'l', 'm',
//     'a', 'n', ' ', 'r',
//     'a', 'z', 'a'
// ]
let lettersTwo = [...username].join("-")
// console.log(lettersTwo)//s-a-l-m-a-n- -r-a-z-a


//FLAT FUNCTION

const anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, [9, [10, 11, 12]], 13];
// console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("salman"));//checks if the given parameter is an array or not
console.log(Array.from("salman"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

