var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
}

var sandesh = new User("Sandesh",2);
// sandesh.getCourseCount();
// sandesh.getFirstName();

if (sandesh.hasOwnProperty) {
    sandesh.getFirstName();
    sandesh.getCourseCount();
}

// console.log(sandesh);

var SP = new User("SP",5);
SP.getCourseCount();
SP.getFirstName();
// console.log(SP);