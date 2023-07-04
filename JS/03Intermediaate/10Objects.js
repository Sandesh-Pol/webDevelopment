var user = {
    firstName: "Sandesh",
    lastName: "Pol",
    role: "Admin",
    loginCount: 32,
    facebook: true,
}

console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount = 41;

console.log(user.loginCount);