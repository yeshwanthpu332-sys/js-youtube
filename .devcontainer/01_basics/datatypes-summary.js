// primitive

//7 types : string, Numbers, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outtsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 387468802847548484848438n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["ironman", "spiderman", "flash"];
let myObj = {
    name: "yesh",
    age = 22,
}

const myFuncton =  myfunction(){
    console.log("hello world");
    
}