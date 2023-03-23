// ------------------------------declaration function---------------------------------


// function sachin(){
//     console.log("hello world")
// }
// sachin();



// function sumtwo(){
//     return 5+6;
// }
// console.log(sumtwo())



// function sumtwo(num1 , num2){
//     return num1 + num2;
// }
// console.log(sumtwo(2,3))



// function sumthree(){
//     return 5+6+5;
// }
// console.log(sumthree())


// ----------Wrap function -------------Animious function -----------self invoke function------------------

// (function(){
//     console.log("hello")
// })()


// (()=>{
//     console.log("hello world")
// })()


// (()=>console.log("hello world"))()


// -------string template --------------backtick------------literial--------------------------------

// function sachin(name , age , mobile){
//     return (` name is :${name} age is : ${age} mobile number is : ${mobile}`)
// }
// let a=sachin("sachin","23","9856230")
// console.log(a)


// function sumthree(num1,num2,num3){
//     return num1+num2+num3;
// }
// console.log(sumthree(5,6,9))



// --------------------------even or odd-------------------------------

// function iseven(num){
//     if(num % 2 === 0){
//         return true
//     }
//     return false;
// }
// console.log(iseven(6))


// ----------------------input = string , output = firstCharacter-----------------

// function input(anystring){
//     return anystring[0];

// }

// console.log(input("sachin"))



// -input= Array, target(number);  output = index of target if index present in array-

// function findTarget(array , target){
//     for(let i=0 ; i<=array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1

// }
// const myarray =[1,3,5,8,9];
// const ans = findTarget(myarray,9);
// console.log(ans)


// ------------------------------expression function-------------------------------

// let sachin = function(){
//     console.log("sachin")
// }
// sachin()


// --------------------arrow function----------------------------------

// let sachin = ()=>{
//     console.log("hello world")
// }
// sachin()


// let sachin = () =>
//     console.log("hello world")

// sachin()



// -----------------------function inside function -----------------------------

// function app(){
//     function local(){
//       console.log("hello world")  
//     }
//     local()
// }
// app()


// -----------------------------lexical scope ----------------------------------------

// function var1(){
//     function var2(){
//         const = 
//     }

// }