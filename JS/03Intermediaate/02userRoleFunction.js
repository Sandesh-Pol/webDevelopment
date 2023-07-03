var getUserRole = function(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with some access`
            break;
        case "testprep":
            return `${name} is testprep `
            break;
        case "user":
            return `${name} is user to consume content`
            break;
    
        default:
            return `no user found`
            break;
    }
}

console.log(getUserRole("Sandesh" , "testprep"));


