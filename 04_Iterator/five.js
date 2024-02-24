const code = ["python","js", "ruby","java"]
// code.forEach(  function (item)  {
// console.log(item);
// })

// code.forEach ( ( item) =>{
//     console.log(item);
// })

// function printMe(item){
// console.log(item);
// }
// code.forEach(printMe)

// code.forEach( (item, index, arr) => {
//     console.log(item), index, arr;
// })

const mycode = [
    {
        languageName : "Javascript",
        langFileName : "js",

    },
    {
        languageName : "Java",
        langFileName : "java",
        
    },
    {
        languageName : "python",
        langFileName : "py",
        
    }
]
mycode.forEach( (item) => {
    console.log(item.languageName);
})