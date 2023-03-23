// -------------simple ------------------

// let array = ["apple","banana","mango"];
// console.log(array)

// ---------------length check ---------------------

// let array = ["apple","banana","mango"];
// console.log(array.length)

// ----------index of array-------------------

// let array = ["apple","banana","mango"];
// console.log(array[0])


// ------------------change array Element value ---------------------


// let array = ["apple","banana","mango"];
// array[0] = "grapes";
// console.log(array)


// ------------------------typeof Array -----------------------


// let array = ["apple","banana","mango"];
// console.log( typeof array)


// -------------------check Array or not-----------------------

// let array = ["apple","banana","mango"];
// console.log(Array.isArray(array))


// ------------------------------push -------------------

// let array = ["apple","banana","mango"];
// array.push("orange");
// console.log(array)

// ------------------------------pop -------------------

// let array = ["apple","banana","mango"];
// array.pop();
// console.log(array)


// --------------------unshift---------------------------------

// let array = ["apple","banana","mango"];
// array.unshift("orange");
// console.log(array)



// --------------------shift---------------------------------

// let array = ["apple","banana","mango"];
// array.shift();
// console.log(array)


// -------------------difference between primitive and reference---------------------


// let num1 = 10;
// let num2 = num1;
// console.log("num1 value is", num1);
// console.log("num2 value is", num2);
// num1++;
// console.log("num1 value is", num1);
// console.log("num2 value is", num2);



// let array1 = ["mango","banana","grapes"];
// let array2 = array1;
// console.log("num1 value is", array1);
// console.log("num2 value is", array2);
// array1.push("ssss");
// console.log("num1 value is", array1);
// console.log("num2 value is", array2);


// ---------------------------how to clone Array ----------------------

// ------------first method---------------

// let array1 = ["mango","banana","orange"];
// let array2 = [].concat(array1);
// console.log("array 2 is ",array2)


// ------------second method---------------


// let array1 = ["mango","banana","orange"];
// let array2 = array1.slice(0);
// console.log("array 2 is ",array2)



// ------------third method---------------


// let array1 = ["mango","banana","orange"];
// let array2 = [...array1];
// console.log("array 2 is ",array2)


// ----------------for loop in array---------------------------------


// let array1 = ["mango","banana","orange",];

// for(let i=0;i<=array1.length-1;i++){
//     console.log(array1[i])
// }

// ----------------for of loop in array-----------------------------------

// let array1 = ["mango","banana","orange",];
// let fruit =[];
// for(fruit of array1){
//     console.log(fruit)
// }



// ----------------for in loop in array-----------------------------------

// let array1 = ["mango","banana","orange",];
// let fruit =[];
// for(fruit in array1){
//     console.log(fruit)
// }


// --------------------------------Array destructuring -----------------------

let firstName = ["mango","orange","banana","grapes"];
// let var1 = firstName[0];
// let var2 = firstName[1];
// let var3 = firstName[2];

// console.log(var1);
// console.log(var2);
// console.log(var3);
let [var1,var2,...var3] = firstName
console.log(var1)
console.log(var2)
console.log(var3)