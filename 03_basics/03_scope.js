// let a=10
// const b=20
// var c =30 // this has not any fixed scope 

// global scope 
let a=300
if(true){
    let a=10;
    const b=20
    console.log("INNER:",a)// blog scope
}
console.log(a)
