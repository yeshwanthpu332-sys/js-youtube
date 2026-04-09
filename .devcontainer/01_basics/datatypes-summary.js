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

//const bigNumber = 387468802847548484848438n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["ironman", "spiderman", "flash"];
let myObj = {
    name: "yesh",
    age : 22,
}

const myFuncton = function(){
        console.log("hello world");
       
    
}

//console.log(typeof bigNumber);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)

let myChannelname = "yeshdotcom"

let anothername = myChannelname
anothername = "chaiwithyesh"

console.log(myChannelname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 

}

let userTwo = userOne

userTwo.email = "yesh@g.com"

console.log(userOne.email);
console.log(userTwo.email);

s