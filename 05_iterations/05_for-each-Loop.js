const languages = ["js", "cpp", "python", "ruby", "rust"]

languages.forEach(function (currentIndex){
    // console.log(currentIndex);
})

languages.forEach((currentIndex) => {
    // console.log(currentIndex)
})

// function printMe(item){
//     console.log(item)
// }

// languages.forEach(printMe)

languages.forEach((item, index, array) => {
    // console.log(item, index, array)
})


// ----------------IMPORTANT------------------------

//MAINLY USED WHILE FETCHING DATA FROM DATABASE

const myCoding = [
    {
        langName: "javascript",
        langShortForm: "js"
    },
    {
        langName: "python",
        langShortForm: "py"
    },
    {
        langName: "java",
        langShortForm: "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName)
})