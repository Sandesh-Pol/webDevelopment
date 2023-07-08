// var myObj = {}

// Object.assign(myObj,{a:1,b:2,c:3},{d:4,e:5,f:6},{z:11,x:12,y:13})

// console.log(myObj);


function sumOne(a,b){
    return a+b;
}

var myA = [5,4];

// console.log(sumOne(...myA));  

function sumTwo(x,y,...a){
    let sum = 0;
    let mul = x*y
    a.forEach(element => {
        sum = sum + element
    });
    return [sum,mul];
}

console.log(sumTwo(1,1,1,1,1,1,1));