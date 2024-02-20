/*const user = {
    username : "Shweta",
    price : 999,

    WelcomeMsg : function() {
        console.log(`${this.username}, Welcome to website` );
        console.log(this);
    }
}
user.WelcomeMsg()
user.username = "SAWO"
user.WelcomeMsg()*/



/*function chai(){
    const username = "Shweta"
    console.log(this.username);
}
chai()*/


// const chai = function(){
//     let username = "Shweta"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Shweta"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Shweta"})

console.log(addTwo(7,6));


