// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2026, 0 ,28)
//let myCreateDate = new Date(2026, 0 ,28, 11, 11)
let myCreateDate = new Date("2023-07-21")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);
