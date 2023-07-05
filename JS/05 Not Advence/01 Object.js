var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var sandesh = new User("Sandesh",2);

console.log(sandesh);

var SP = new User("SP",2);

console.log(SP);