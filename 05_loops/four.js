const myobject={
    js:'javascipt',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobject) {
    console.log(key)
}
// for value of key
for (const key in myobject) {
    console.log(myobject[key])
}
// if we use for in loop to array then it will give index 
const array=[2,3,4,5,6];
for (const key in array) {
   console.log(array[key])
}