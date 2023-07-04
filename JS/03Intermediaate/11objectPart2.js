var user = {
    firstName   :  "Sandesh",
    lastName: "Pol",
    role: "Admin",
    loginCount: 32,
    facebook: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`
    },
    info: function(){
        return `
          First Name    :  ${this.firstName}
          Last Name     :  ${this.lastName}
          Role          :  ${this.role}
          Login count   :  ${this.loginCount}
          Facebook      :  ${this.facebook}
          Course List   :  ${this.courseList}
        `
    }
};



var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("Angular");
user.buyCourse("React JS");
console.log(user.getCourseCount());


console.log(user.info());