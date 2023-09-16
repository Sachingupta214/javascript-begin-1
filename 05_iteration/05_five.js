const coding = ["java" , "ruby" , "python", "javascript", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((val) => {
//     console.log(val);
// });

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index , arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName: "python",
        languageFileName: "py" 
    },
    {
        languageName: "ruby",
        languageFileName: "rb" 
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})