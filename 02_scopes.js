// var c = 300
// global scope
let a = 300

// Block scope
if(true){
    let a = 10
    const b = 20
    //console.log("INNER : ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);  it is available out of scope

function one(){
    const username = "nikhil"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);
    two()
}


//one()

if(true){
    const username = "nikhil"
    if(username === "nikhil"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++

// basic function acess before intilization
addone(5);
function addone(num){
    return num + 1
}
addone(5)

// expressions cant acess before intilization
//addTwo(5)
const addTwo = function(num){
    return num+2
}

