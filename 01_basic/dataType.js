let name = "Shweta"
let age = 23
let isPass = true
let lname
let fname = null

console.log(name);
console.log(age);
console.log(isPass);
console.log(lname);
console.log(fname);


//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
//BigInt
const bigNumber= 1234567890987654321n

/*dataTypes : Primitive and Reference
-------------Primitive are :----------------
1) numbers
2) string
3) Boolean
4) undefined   (when console.log(typeOf(undefined)) it will return Object, so undefined is an undefined type)
5) null        (when console.log(typeOf(null)) it will return Object, so null is an object)
6) symbol
7) BigInt 


------------ Reference ------------
1) Array
2) Objects
3) Functions

*/


//Array
const color = ["Blue", "Black", "Yellow", "White"];
console.log(color);

// Object
let myObj = {
    name: "Shweta",
    age: 23
}
console.log(myObj);

// Function

const myFunction = function(a,b){
    c = a + b;
    console.log(c);
}
myFunction(2,3)

//--------- Stack And Heap --------------

let myName = "Shweta Chaurasiya"
let anotherName = myName
anotherName ="SAWO"

console.log(myName);
console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    password : "2345"
}

let user2 = user1
user2.email = "sawo@gmail.com"

console.log(user1.email);
console.log(user2.email);

//stack me copy milta hai and heap me reference milta hai

