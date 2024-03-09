//functions in javascript

function greeting(){
    console.log("Hey There! I am learning JavaScript");
}

// greeting();

function addTwoNumbers(num1, num2){
    let res = num1 + num2;
    // console.log(`Addition of the numbers ${num1} and ${num2} is ${res}`);
    return res;
}

// addTwoNumbers(5,3);
// const result = addTwoNumbers(5,4);
// console.log(result);

function isLoggedIn(username = "samantha"){//default argument is given here as samantha
    if(!username){//if(username === undefined)
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

console.log(isLoggedIn());

