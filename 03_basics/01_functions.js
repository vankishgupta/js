// FUNCTION 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName;// use for function reference
// sayMyName();// use for function call

// function to add two numbers
function addTwoNumbers(number1,number2){// parameters
    console.log(number1+number2);
}
//addTwoNumbers(3,4)//give 7
// arguments 

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("vankish"))
// console.log(loginUserMessage())//undefined when we donot pass any value

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("vankish"))
console.log(loginUserMessage())//undefined when we donot pass any value