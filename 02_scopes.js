// var c = 300
// global scope
let a = 300

// Block scope
if(true){
    let a = 10
    const b = 20
    console.log("INNER : ", a);
}

console.log(a);
//console.log(b);
//console.log(c);  it is available out of scope




