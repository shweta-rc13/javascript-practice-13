let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate));

let myCDate = new Date(2024, 8, 22 )
console.log(myCDate.toDateString());

let myCrDate = new Date(2024, 8, 22 , 11, 11)
console.log(myCrDate.toLocaleString());

let mycreDate = new Date("01-21-2024")


let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(mycreDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

 const see =newDate.toLocaleString('default', {
    weekday:"long",
    
})
console.log(see);

