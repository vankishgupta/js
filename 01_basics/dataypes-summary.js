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

// Reference (non primitve)
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





// *******MEMORY*****
// two types 
// stack(Primitive),Heap(Non-primitve)
// stack ke andr copy milega and heap ke andr reference milega 
 let myyoutubename="vankish.com"

 //example for primitive
 let anothername=myyoutubename
 anothername="chaiaurcode"
 console.log(anothername)
 console.log(myyoutubename)

 let userone={
    email:"user@google.com",
    upi:"user@ybl",
 }// direct heap mei jayega and stack mei varible name ayega but refer vo
 // heap mei karega 

let usertwo=userone
usertwo.email="vankishgupta@gmail.com" //userone.email ki bhi value change ho jayegi 
console.log(userone.email)
console.log(usertwo.email)


