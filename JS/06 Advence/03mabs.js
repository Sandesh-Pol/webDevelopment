var myMab = new Map();

myMab.set(0, "Uno");
myMab.set(2, "dos");
myMab.set(3, "Tres");
myMab.set(4, "Cuantro");


console.log(myMab);


for(let key of myMab.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMab.values()){
    console.log(`Key is ${value}`);
}

for(let[ value,key] of myMab){
    console.log(`Key is ${key} and value is ${value}`);
}

myMab.forEach((v,k) => console.log(`${k} and ${v}`))


myMab.delete(2);

console.log(myMab);