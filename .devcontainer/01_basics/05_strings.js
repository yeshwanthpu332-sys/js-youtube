const name = "yesh"
const repoCount = 30

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('yeshaa-ah-sh')

//console.log(gameName[2]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   yesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://yesh.com/yesh%20yeshh"
console.log(url.replace('%20', '_'));

console.log(url.includes('gowda'));
console.log(gameName.split('-'));
