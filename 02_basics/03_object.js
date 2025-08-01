// object can be declared in two ways 
// ->literal (singleton nhi bnega)
// ->constructor (singleton bnega)

// using constructor 
Object.create // use hoga usme 

// using literals

const mySym=Symbol("key1")// this is syntax to declare symbol
//console.log(mySym)
const JsUser ={
    name:"hitesh",
    "fullname":"hitesh singh", // ab app is value ko dot se access nhi kar paoge 
    age:18,
    mySym:"key1",//this is not used as symbol,as its type is string
    [mySym]:"mykey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// //console.log(JsUser."fullname");// not valid
// console.log(JsUser["fullname"])// valid 
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym]))

// we can also overwrite the value of object of class 
JsUser.email="hitesh@chatgpt.com"
// we can also freeze objects of class 
//Object.freeze(JsUser)
// now we cannot overwrite values 
JsUser.email="vankishguta"
//console.log(JsUser.email)

JsUser.greeting=function(){
    console.log("hello js");
}

//console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting2());