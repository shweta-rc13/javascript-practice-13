const mySym = Symbol("key1")
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
console.log(jsuser.greeting2());