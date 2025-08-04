const userEmail="vankishgupta@gmail.com"
if(userEmail){
    console.log("Got the user email")
}
else {
    console.log("Don't have user email")
}

// falsy values
// false,0,-0,BigINT 0n,"",undefined,null,NaN

// truthy values 
// "0",'false'," ",[],{},.function(){};
// empty array,function,object are truthy values 

user=[];
const ob={
    name:"vankish",
}
if(!user.length){
    console.log("array is empty");
}
if(ob.size!=0){
    console.log("object is not empty")
}

//imp things 
// false ==0 (true)
// false == '' (true)
// 0==''(true)


// Nullish Coalescing Operator (??): null undefined 
let val1;
val1=5??10
val2=null??10 // agr val null ha toh vo baad vali value lega 
val3=undefined??15
val4=null??10??15 // 10 
console.log(val3);
console.log(val1)
console.log(val2);

// ternary operator 
//condition?true:false;

const icetea=100;
icetea>=80?console.log("less than 80"):console.log("more than 80");
