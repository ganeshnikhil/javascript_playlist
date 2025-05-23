const accountId = 14453
let accountEmail = "nikhil@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 not allowed 

accountEmail = "ganesh@000"
accountPassword = "54321"
accountCity = "Bengaluru"

console.log(accountId)
/*
prefer not to use var 
because of functional scope
*/

console.table([accountId , accountEmail , accountPassword, accountCity,accountState])