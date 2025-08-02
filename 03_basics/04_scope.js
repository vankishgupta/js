// NESTED SCOPE 

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
}
one()


// ++++++++INTERESTING THING +++++++

// valid thing 
console.log(addone(5))
function addone(num){
    return num+1
}

// not valid
// addTwoNumbers(5)
// const addtwo=function(num){
//     return num+2;
// }