//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "nikhil"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"nikhil@123gmail.com",
    fullname:{
        userfullname:{
            firstname:"ganesh",
            lastname:"nikhil"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj2 = {
    3:"a",
    4:"b"
}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
