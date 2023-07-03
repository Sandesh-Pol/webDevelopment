
var user =  "user"
switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subAdmin":
        console.log("gets access to create or delete ");
        break;
    case "testier":
        console.log("gets access to test ");
        break;
    case "user":
        console.log("gets access to add data ");
        break;

    default:
        console.log("No such user");
        break;
}