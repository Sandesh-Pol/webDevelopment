// import User from "./06classes";


const User = require("./06classes.js");

const sandesh = new User("Sandesh","sandeshpol@gmail.com");

console.log(sandesh.getInfo());

sandesh.elrollCourse("Reacts");

sandesh.elrollCourse("Anguler");

let courses = sandesh.getCourseList();

courses.forEach(e => console.log(e))

