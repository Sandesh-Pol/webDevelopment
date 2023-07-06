function init(){
    var firstName = "Sandesh"
    console.log("Iam in it");
    function sayFirsrName(){
        console.log(this.firstName);
    }
    return sayFirsrName;
}

var value = init();

value();


function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(4)

console.log(add5(5));