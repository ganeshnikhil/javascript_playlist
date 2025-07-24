// singleton 

// object literals 
const mySym = Symbol("key1")
const jsUser = {
    name : "Nikhil",
    "full_name":"Ganesh Nikhil",
    [mySym] : "mykey1",
    age : 19,
    location : "bihar",
    email : "ganeshnikhil678@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// two methods to acess values of object
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full_name"]);

jsUser.email = "nikhil@chatgpt.com"
//Object.freeze(jsUser);
jsUser.email = "how@67gamil.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting();

