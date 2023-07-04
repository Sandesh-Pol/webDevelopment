var isEven = (element) => {
    // if (element % 2 == 0) {
    //     return true;  
    //     }
    // return false;

    return element % 2 === 0;
}
// console.log(isEven(2));


// var res = [2,5,6,8].every(isEven)

// console.log(res);

// var res = [2,4,6,8].every((e) => {
//     return e % 2 === 0;
// })

var res = [2,4,6,8].every((e) => (e % 2 === 0));

console.log(res);