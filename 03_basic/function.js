function sayMyname(){
    console.log("Shweta");
}
//sayMyname()

// function add(num1, num2){
  
//     console.log(num1 + num2);
// }


function add(num1, num2){
  
//   let Result = num1 + num2;
//   return Result

    return num1 + num2;
}
const Result = add(10,"20");
//console.log("Result: " + Result);

function loginUserMsg(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`
}
// const name = loginUserMsg("Shweta");
// console.log("Username is", name);

console.log(loginUserMsg());