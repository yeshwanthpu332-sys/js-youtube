// singleton

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "yesh",
    "full name": "yesh",
    [mySym]: "myKey1",
    age:"19",
    location: "goa",
    email: "yesh@gg.com",
    isLoggedIn: false,
    lastLonginDays: ["monday","friday"]
}

//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);
//console.log(Jsuser[mySym]);

Jsuser.email = "yesh@gowda.com"
//Object.freeze(Jsuser)
Jsuser.email = "yesh@chat.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello JS world");
    
}
Jsuser.greetingTwo = function(){
    console.log(`hello JS world, ${this.name}`);

}   

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

