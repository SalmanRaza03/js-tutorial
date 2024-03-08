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
// console.log(allHeroes);

//SPREAD OPERATOR
const allOfMyHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allOfMyHeroes);

//FLAT FUNCTION

const anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, [9, [10, 11, 12]], 13];
// console.log(anotherArray.flat(Infinity));

// console.log(Array.isArray("salman"));//checks if the given parameter is an array or not
// console.log(Array.from("salman"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

