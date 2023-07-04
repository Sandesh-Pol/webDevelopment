var name = "Sandesh";

console.log("This is line No 3",name);

function sayName() {
    // var name = "Mr_SP";
    console.log("This is line No 6",name);
    sayNameTwo();

    function sayNameTwo(){
        // var name = "Ms_SP";
        console.log("This is line 10",name);
    }
}
sayName();