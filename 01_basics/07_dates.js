// DATES 
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);//object 
//IMP TYPE OF DATE IS OBJECT //

// NEW CONCEPT 
// let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate);
// // now to check which date we have created 
// console.log(myCreatedDate.toDateString());


// let myCreatedDate=new Date("2025-07-31");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("07-31-2025");
//console.log(myCreatedDate.toLocaleString());

//TIME STAMP
let myTimeStamp=Date.now();// give time in ms
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// to get time in sec
// console.log(Math.floor(Date.now()/1000));// give time in sec

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})



