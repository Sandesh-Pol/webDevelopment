
var isLoggedIn = true;
var isEmailVerified  = true;
var cardInfo  = true;

// if(isLoggedIn){
//     console.log("Login Success . . . !");
//     if(isEmailVerified){
//         console.log("Email verified . . . !");
//         if(cardInfo){
//             console.log("You can purchase now . . . !");
//         }
//     }
// }


if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to purchase ");
}else{
    console.log("You are not allowed . . .!");
}