// username = "s@shweta.in"
// if(username){
//     console.log("Got email");
// }else{
//     console.log("Don't get user mail");
// }

// username = ""
// if(username){
//     console.log("Got email");
// }else{
//     console.log("Don't get user mail");
// }

username = []
if(username){
    console.log("Got email");
}else{
    console.log("Don't get user mail");
}


//falsy Values: - false, 0 , -0, Bigint 0n, null, undefined, NaN

//Truthy Values:- "0", 'false', " ", [], {}, function(){}



// if (username.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length===0) {
//     console.log("Object is empty");
// }


//Nullish Coalescing Operator (??): null undefined
let val;
//val = 5 ?? 10
// val = null ?? 10
// val = undefined ??  15
val = null?? 10 ?? 20
//console.log(val);

//Terniary Operator
// condition ? true : false

const price = 100
price >=1000? console.log("less than 100") :console.log("more than 100");;