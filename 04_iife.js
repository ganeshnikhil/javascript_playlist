// Immedialtly Invoked Function expression

// semicolon necessary
(function chai (){
    // named IIFE 
    console.log(`Db connected`);
})();


( (name) =>  {
    console.log(`db connected to ${name}`);
} )("nikhil");




