// console.log('H');
// console.log('E');
// console.log('L');
// console.log('L');
// console.log('o');


function sayhello(){
    console.log('H');
    console.log('E');
    console.log('L');
    console.log('L');
    console.log('o');
}

//sayhello()

// function addTwoNumbers(number1 , number2){

//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1 , number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}


const result = addTwoNumbers(3,5)

//console.log("Result: ",result);

function loginUserMessage(username = "nikhil"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nikhil"))
//console.log(loginUserMessage("nikhil"))

// rest operator
function calculateCartPrice(val1 , val2 , ...nums){
    return nums
}

//console.log(calculateCartPrice(200 , 400 , 500));

const user = {
    username : "nikhil",
    price:139
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"Nikhil",
    price: 599
})

const mynewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]));







