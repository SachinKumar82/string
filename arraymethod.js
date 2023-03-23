
// ----------------ForEach loop---------------------

// const numbers = [2,5,8,90];
// function multipleBy2(number  , index ){
//     console.log(`index is ${index} number is ${number}*2 = ${number*2}`);
// }
// for(let i=0;i<numbers.length;i++){
//     multipleBy2(numbers[i],i)
// }

// ------------------------2-----------------------------


// const numbers = [2,5,8,90];
// function multipleBy2(number , index){
//     console.log(`index is ${index} number is ${number}*2 = ${number*2}`);
// }

// let ans = numbers.forEach(multipleBy2);
// console.log(ans)



// -------------------------3---------------------------------------



// const numbers = [2,5,8,90];
// let a=numbers.forEach((number , index)=>{
//         console.log(`index is ${index} number is ${number}*2 = ${number*2}`);

// })
// console.log(a)

// ------------------------4-------------------------------


// const users = [
//     {firstName : "sachin",   age:23},
//     {firstName : "anukool",  age:24},
//     {firstName : "dikshant", age:25},
//     {firstName : "mukul",    age:26},
// ]
// users.forEach((users)=>{
//     console.log(users.age)
// })


// ---------------------map----------------------------------

// ------array mai value return krega ismai hum console ki jga return use krege -------------------

// const numbers = [1,2,5,8,7];

// function square(number){
//     return number * number ;
// } 

// let a =numbers.map(square);
//  console.log(a)


// --------------------------2------------------------

//  const users = [
//         {firstName : "sachin",   age:23},
//         {firstName : "anukool",  age:24},
//         {firstName : "dikshant", age:25},
//         {firstName : "mukul",    age:26},
//     ]
//     let a=users.map((users)=>{
//         return users.age
//     })
//     console.log(a)



// --------------filter ----------------------------------------

// const numbers = [1,3,2,6,4,8];
// function isEven(number){
//     return number%2===0;
// }

// let a =numbers.filter(isEven);
// console.log(a)



// ------------------------reduce-------------------------

// const numbers = [1,2,3,4,5,10];

// const sum = numbers.reduce((accumlator , currentValue)=>{
//     return accumlator + currentValue;

// },10);

// console.log(sum)





// const numbers = [
//     {
//         name:"sachin" , salary:25000
//     },
//     {
//         name:"anukool" , salary:22000
//     },
//     {
//         name:"dikshant" , salary:20000
//     }

// ]

// let a=numbers.reduce((totalSalary , currentSalary)=>{
//     return totalSalary + currentSalary.salary;

// },0);
// console.log(a)



// ---------------------sort-----------------------------------

// const numbers = [5,9,1200,410,3000];
// // let a=numbers.sort((a,b)  => {
// //     return ;
// // });
// // console.log(a)


// const numbers = ["sachin", "anukool","mukul","dikshant"];
// console.log(numbers.sort())


// --------------------find method---------------------------------------------------------

// const myArray = ["sachin","abc","anukool","annnu"];

//  function isLength(string){
//     return string.length === 6;
//  }
//  myArray.find(isLength);


// ----------------------splice--------------------------------------------

const myArray =  ['sachin','anukool','dikshant','mukul'];

console.log(myArray.splice(2,1));