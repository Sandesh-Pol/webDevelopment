const sandesh = {
    firstName : "Sandesh",
    lastName : "Pol",
    courseCount: 3,
    role: "Admin",
    getInfo : function(){
        console.log(`
        First Name : ${this.firstName}
        Last Name  : ${this.lastName}
        His role is: ${this.role}
        His Course : ${this.courseCount}
        `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role: "Sub-Admin",
    courseCount: 3,
}

// sandesh.getInfo();

// dj.getInfo();

// sandesh.getInfo.bind(dj)();

// var djInfo = sandesh.getInfo.bind(dj);
// djInfo();

sandesh.getInfo.call(dj);