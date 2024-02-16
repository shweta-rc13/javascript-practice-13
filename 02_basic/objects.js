/*const mySym = Symbol("key1")
const jsuser = {
    name : "Shweta",
    age : 23,
    [mySym]:"mykey1",
    location: "Mumbai",
    email : "shweta@google.com",
    isLoggedin : false,
    lastlogindays : ["Monday", "Sunday"]
}
console.log(jsuser.name);
console.log(jsuser["age"]);
console.log(jsuser[mySym]);

jsuser.email = "sawo@gmail.com"
console.log(jsuser["email"]);
//Object.freeze(jsuser)  //koi bhi changes object me nhi hoga iske baad
jsuser.email = "shweta@gmail.com"
console.log(jsuser["email"]);
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${ this.name}`);
}
console.log(jsuser.greeting2());  */


//const tinderuser = new Object()
const tinderuser = {}
tinderuser.id ="123abc"
tinderuser.name = "sawo"
tinderuser.isLoggedin = false
//console.log(tinderuser);

const regularuser = {
    email:"sawo@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Sawo",
            lastname :"YT"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3);