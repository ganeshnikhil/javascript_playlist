const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value");


//console.log(`helo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nikhil-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  nikhil  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/Ganesh%20Nikhil"

console.log(url.replace('%20',"_"));

console.log(url.includes('Nikhil'));

console.log(gameName.split('-'));

