// array 
// javacript mei array mei different type ke element bhi ho sakte ha 
const myarr=[0,1,2,3,4,5]
//console.log(myarr[0]);

// shallow and deep copy 
//shallow copy share the same reference 
// deep copy  do not share the same reference

const myHeros=["shaktiman","superman"];
const myarr2=new Array(1,2,3,4);
// console.log(typeof myArr);
// console.log(typeof myarr2);

// new methods of array

myarr.push(6);
myarr.pop();//remove last element
// console.log(myarr);

// myarr.unshift(9);// add 9 element at start but shift indx of every element
// console.log(myarr);

// myarr.shift()// remove element from start
// console.log(myarr);



// WE CAN ALSO ASK SOME QUS TO ARRAY IN JAVASCRIPT 
// console.log(myarr.includes(9));
// console.log(myarr);

// // new operation which is more frequently used 
// const newarr=myarr.join();// change array to string
// console.log(myarr);
// console.log(newarr);




// from this part interview qus are asked some times 
// slice ,splice
console.log("A",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3);// array hi change ho jayega 
// pura vo vala part including last indx here 1 to 3 part cut ho jayega 
console.log("C",myarr);
console.log(myn2);
