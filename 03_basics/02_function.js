function CalculateCartPrice(...num1){
    return num1;
}
console.log(CalculateCartPrice(200,400,500))
// rest operator use kiya ha jitni marzi value input de sakte ha 
// agr simple int le lete toh sirf first value input leke return kardeta 

const user={
    username:"vankish",
    price:199,
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is&{anyobject.price}`);

}
//handleobject(user)
handleobject({
    username:"sam",
    price:399,
})
