//const tinderUser= new Object() // empty object dega
// but ye singleton object
//const tinderUser={}// ye bhi empty object hi dega 
// but ye non-singleton object dega

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggegIN=false//
//console.log(tinderUser)
// we can also make array of all values ,all keys separately 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))// rarely used 
console.log(tinderUser.hasOwnProperty('name'))// return true 

// NESTING of objects 

const regularUser={
    email:"vankishgupta",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary",
        }
    }
}
//console.log(regularUser)
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}// object ke andr 2 object aa jaeyege 
// console.log(obj3)

// const obj3=Object.assign({{},obj1,obj2});
// console.log(obj1==obj3)
// console.log(obj3);

// we can also use spread operator 
const obj3={...obj1,...obj2}
console.log(obj3)

// we can also decare array of objects
