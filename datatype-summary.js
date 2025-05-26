// primitive datatype 

// 7 types : string , Number , Boolean , null , undefined , symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let UserEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 34565437888890874n

const heros = ["shaktiman","nagraj" ,"doga"];
let myobj = {
    name: "nikhil",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}
console.log(typeof heros);

// null type of datatype is object 

// Reference type (Non primitve)

// Array , objects , Functions 



//++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , heap(None primitive)

let myYoutubename = "ganeshnikhil.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "nikhil@google.com"
console.log(userOne.email);
console.log(userTwo.email);

