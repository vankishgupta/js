// for of 

const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
const greetings="hello world"
// for(const char of greetings){
//     if(char==" ")continue;
//     console.log(`each char is ${char}`);
// }

// map holds key value pairs and remembers the original insertion order 
// of the keys 
// unique key value pair store karega 
const map=new Map();
map.set('IN',"INDIA")
map.set('USA',"United states of america")
map.set('FR',"France")
// console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

// for of iteration does not work in case of objects 