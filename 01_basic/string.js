const name = "Shweta "
const repoCount = 8
//console.log(name + repoCount + " on Github")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ("Shwe-ta")
console.log(gameName);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString); 

const newString1 = gameName.slice(-4, -4);
console.log(newString1);

const newString2 = "  shweta   "
console.log(newString2);
console.log(newString2.trim());

const  url = "https://google.com/google%20.com"
console.log(url.replace("%20", "-"));

console.log(url.includes("shweta"))

console.log(gameName.split('-'));

