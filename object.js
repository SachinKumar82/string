// --------------------simple object-----------------------------------

// let person = {
//     name:"sachin",
//     age:23,
//     hobbies:["listening song","movie"]

// }
// console.log(person)

// ----------------- access krna with(.)----------------------

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies)


// ------------------------------------add krna in object -----------

// person.email = "sachinmogha772@gmail.com";
// console.log(person)

// -----------------------------key value add krna in obj---------------------------

// let key = "email";
// person[key] = "sachinmogha772@gmail.com";
// console.log(person)



// ----------------------how to iterate object ---------------------------------

// for(key in person){
//     console.log(`${key} : ${person[key]}`)
// }


// --------------------------computed properties---------------------------------

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj)


// ------------------------spread operator in object--------------------------

// let person = {
//     name:"sachin",
//     age :22,

// }

// let person1 = {
//     name1:"sachin1",
//     age1 :221,
    
// }

// let mynew = {...person,...person1,..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",}
// console.log(mynew)


// ---------------constructor in object-------------------------------------------------------------

// function s(){
//     this.name="sachin";
//     this.age=23
// }
// let obj = new s();
// obj.age=24;
// console.log(obj)



// ---------------------------Protootype----------------------------------------------

// function anu(){
//     this.name="sachin";
//     this.lastname="mogha"
//     anu.address="saharanpur";
//     anu.prototype.age=21
// }
// let obj = new anu();
// console.log(obj)
// anu.prototype.age=27
// console.log(anu.prototype)

// ------------function object-------------------------------------------




// function Person(name) {
//     this.name = name;
//     this.age = 21;
//   }
//   var object = new Person("Sudheer");