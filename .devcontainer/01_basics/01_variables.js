const accountId = "009988"
let accountEmail = "yesh28@gmail.com"
var accountPassword = "123450"
acoountCity = "goa"
let accountState;

//accountId = 2 // not allowed

accountEmail = "yesh@g.com"
accountPassword = "070707"
acoountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, acoountCity, accountState])
