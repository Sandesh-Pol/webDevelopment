function init(){
    var firstName = "Sandesh"
    function sayFirsrName(){
        console.log(this.firstName);
    }
    sayFirsrName();
}

init();