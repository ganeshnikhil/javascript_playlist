console.log('H');
console.log('E');
console.log('L');
console.log('L');
console.log('o');


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

console.log("Result: ",result);

function loginUserMessage(username = "nikhil"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nikhil"))
console.log(loginUserMessage("nikhil"))












