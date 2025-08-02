const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
}
// course.courseInstructor
// de-structure of object
const{courseInstructor:instructor}=course;
//console.log(instructor)// give output as hitesh


// JSON
// in JSON both key and value are string 
{
    "name":"hitesh",
    "coursename":"js in hindi",
    "price":"free",
}