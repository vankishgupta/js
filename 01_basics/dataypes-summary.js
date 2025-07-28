//primitive

// 7 types:string,number,boolearn,null,undefined,symbol,BigInt

const score=100
const scorevalue=100.3
const isloggedin=false
const outsideTemp=null
let userEmail;// bydefault undefined 

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

// to store large value like bigInt just number ke agge n lagado
const bigNumber=34654354354354n
console.log(typeof bigNumber)

// reference (non primitve)
// array,objects,functions

const heros=["shaktiman","naagraj","doga"];
let myobj={
   name:"hitesh",
   age:22,
}
console.log(myobj.age);

const myfunction=function(){
    console.log("hello world");
}
console.log(myfunction)
console.log(typeof myfunction)// function