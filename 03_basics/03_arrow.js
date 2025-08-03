const user={
    username:"hitesh",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // this means current context
        console.log(this);
    }
}

// user.welcomeMessage()//hitesh
//  user.username="sam"
// user.welcomeMessage();
// console.log(this)// empty()
// but in browser global object is window 

// function chai(){
//     console.log(this)
// }

//chai()

// const chai =()=>{
//     let username="hitesh"
//     console.log(this.username);
// }

// chai()

//+++++++++ ARROW FUNCTION +++++++
// () => {}

    // const addtwo=(num1,num2)=>{
    //     return num1+num2
    // }

// {} isme return keyword use hoga 
// ()isme return nhi use hoga 
// this can also ne written as 
const addtwo=(num1,num2) =>num1+num2
// const addtwo=(num1,num2)=>num1+num2
 console.log(addtwo(3,4))
 // but agr object return karna ha toh curly braces use hogyi ()
 const addTwo=(num1,num2)=>({username:"hitesh"})
 console.log(addTwo(3,4))

