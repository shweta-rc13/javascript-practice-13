const myNums = [1,2,3,4,5,6,7,8,9,10]

//const New = myNums.map( (num)=>{return num + 10})
const New = myNums.map((num) => num * 10).map( (num) => num+ 1).filter( (num)=> num>=40)

//console.log(New);

// =======Reduce===========================

 const mynum = [1,2,3]
// const myTotal =  mynum.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and curval :${curval}`);
//     return acc+curval
// }, 0)

const myTotal = mynum.reduce( (acc, curr) => acc+curr, 0)
//console.log(myTotal);

const shoppingCart = [
   { itemname : "js course",
    price : 999},
    { itemname : "python course",
    price : 5999},
    { itemname : "dev course",
    price : 1999},
    { itemname : "Data course",
    price :99999},
]
const p2p=shoppingCart.reduce( (acc, item)=> acc + item.price, 0)
console.log(p2p);
