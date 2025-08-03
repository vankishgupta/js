// Immediately Invoked function expressions (IIFE)
// APLLICATION
// ->to remove pollution due to global scope 
// here we use two parenthesis 
// first one ()is used to write function in it 
// second one is used for execution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)

})();
//()()
// chai()
// always apply semicolon after IIFE

(
    ()=>{
        console.log(`DB connected two`);
    }
)()