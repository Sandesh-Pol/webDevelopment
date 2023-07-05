var User =  {
    name: "",
    getUserName(){
        console.log(`User name is : ${this.name}`);
    },
}

var sandesh = Object.create(User);

sandesh.name = "Sandesh"

sandesh.getUserName();

console.log(sandesh);

var sam = Object.create(User,{
    name: {value: "Sp"},
    courseCount:{value: "2"}
})

sam.getUserName();
console.log(sam.courseCount);