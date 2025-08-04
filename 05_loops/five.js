// for each loop
const coding =["js","ruby","java","pyhton","cpp"]
// coding.forEach( function(val){
//     console.log(val);
// })

coding.forEach((item)=>{
    console.log(item);
})
coding.forEach((item,index,arr)=>{
        console.log(item,index,arr);
})

const mycoding=[
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py",
    },
    {
        languageName:"c++",
        languageFileName:"cpp",
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})