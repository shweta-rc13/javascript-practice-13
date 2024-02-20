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

function loginUserMsg(username ="sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`
}
// const name = loginUserMsg("Shweta");
// console.log("Username is", name);

//console.log(loginUserMsg("Shweta"));

function calculateCartPrice(...num1) {
    return num1
}

const price = calculateCartPrice(100, 200, 300);
//console.log(price);

const user = {
    username: "shweta",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
handleObject(user)
//OR
handleObject({username: "SAWO", price:150})


const myNewarray = [200, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewarray));