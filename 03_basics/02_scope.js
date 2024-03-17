// let a = 20;
// const b = 40;
// var c = 60;

// let a = 24;
if(true){
    let a = 20;
    const b = 40;
    // var c = 60;
    // console.log("INNER: ", a);
}

// console.log(a);//24
// console.log(a)//gives an error if a is not defined in line 5 due to scope 
// console.log(b)//gives an error due to scope
// console.log(c)//output 60 as declared using var


function one(){
    const userName = "salman"
    function two(){
        const editor = "vscode"
        console.log(userName)
    }
    console.log(editor)
    two();
}
// console.log(userName);
// one();


if(true){
    const userName = "raza"
    if(userName == "raza"){
        const editor = "atom"
        // console.log(userName);
    }
    // console.log(editor);
}
// console.log(userName);


// ----------------------INTERESTING SCENARIO-------------------------

// console.log(addOne(23));//outputs 24
function addOne(num){
    return num + 1;
}
// console.log(addOne(23));//outputs 24

// addTwo();//throws an error
const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(34));

