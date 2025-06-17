// array 

const myArr = [0 , 1 , 2, 3, 4, 5]

console.log(myArr[0]);

const myHeors = ["shaktiman","naagraj"]
console.log(myHeors[1]);

// Array Methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice , splice 
console.log("A orignal: ",myArr);

const myn1 = myArr.slice(1 , 3);

console.log(myn1);
console.log("B slice:  ",myArr);

const myn2 = myArr.splice(1 , 3)
console.log("c splice: ",myArr); //orignal array get updated 
console.log(myn2);
