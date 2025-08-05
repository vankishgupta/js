// reduce 
const mynums=[1,2,3]

// const mytotal=mynums.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curr:${curr}`)
//     return acc+curr
// },0)
// console.log(mytotal)//6

// using arrow functions 
const myTotal=mynums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)