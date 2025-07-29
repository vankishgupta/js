const name="hitesh"
const repocount=50

 console.log(name+repocount+"value")//works but not preferred
 // in new world we use string interpolation
 // where we use backtick 
 console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

 // string can also be declared using new keyword
 // new word is used for objects 
 const gameName=new String("vankish")
 console.log(gameName)
console.log(gameName[0])// v
console.log(gameName.__proto__)//{}

console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));// n
console.log(gameName.indexOf('n'))

const newstring=gameName.substring(0,4);
console.log(newstring)

const anotherstring=gameName.slice(-5,4);// pichese start hoga kyuki negative ha and ye sirf slice mei hi work karega
console.log(anotherstring)

const newstringone=" hitesh "
console.log(newstringone)
console.log(newstringone.trim()) //string ke agge and piche vali space ko remove kardega

const url="htttps://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'))

const temp="vankish-gupta-btech"
console.log(temp.split('-'))
