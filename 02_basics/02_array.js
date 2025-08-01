const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heros.push(dc);
// as we know array ko bhi data le leta toh iss bar 
// array mei array chala jayega
//console.log(marvel_heros);

//console.log(marvel_heros[3]);//array ayega 

// if want to concat two array use concat function
const allHeros=marvel_heros.concat(dc);
//console.log(allHeros);

// we  can also use spread function called concat spread operator
const all_new_heros=[...marvel_heros,...dc];
//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//console.log(another_array);
const real_another_array=another_array.flat(Infinity);
//console.log(real_another_array);

// we can also ask qus to array 
//console.log(Array.isArray("Hitesh"));
// also made array 
//console.log(Array.from("Hitesh"));

// INTERRESTING CASE AND QUS FOR INTERVIEW 
// when we key:value we have to mention it which thing we wnat to convert in to array that is key or value 
console.log(Array.from({name:"hitesh"}));
// here we have not mentioned it so it will return empty array 

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));