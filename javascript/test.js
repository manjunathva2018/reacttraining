import { add } from './test4';
// import * as mathOps from './test4';

// mathOps;
console.log(add(1,2));

'use strict';
// var a = 10;
// a = 'test';

// console.log("start");

// setTimeout(
//     function(){
//         console.log("timeout")
//     },0
// );

// console.log("end");

// const a = 'test'; read only
 // a = true;      cannot change the value    

// for(var i=0;i<10;i++)   gives the output 10 ten times
// for(let i=0;i<10;i++){
//     setTimeout(
//         function(){
//             console.log(i);
//         },
//         i*100    
//     );
// }


// console.log(j);
// var j = 10;   output: undefined
//let j = 10;   output: error

//Function declaration
// function test(a){
//     return a;
// } 

// var test = function(a){
//     return test;
// }

// arrow function
//if single line of code 
// var test = (a) => variableValue/console.log(a);

// var test = (a) => ({a:'test',b:'data'})  // default return statements

//Template or String Literals
// const name = 'mike';
// const msg = 'Hello from' + name + 'Good Morning!'; 
// const msg1 = 'Hello from ' + name + ' Good Morning';
//by Literals (it has a advantage of concatination of string)
// const msg2 = `Hello from ${name} good morning`;
// console.log(msg);
// console.log(msg1);
// console.log(msg2);

// spread attribute
// ... spread operator (taking multiple values(objects) and converted into array (ofobjects))
// function sumOfNum(...a){
//     let sum = 0
//     for(var i=0; i<a.length; i++){
//         sum += a[i];
//     }
//     console.log(sum);
// }

// sumOfNum(1,2,3,4)

// Object
// var user = {
//     name:'sunil',
//     test:()=> console.log("test")
// }

//Regular way of access
// user.name
// user.test()

//array technique
// user['name']
// user['test']()

//difference b/w regular way and array tech 
// const key = 'name';
//user.key   // output:Undefined
//user[key]  // gives output

//Destructuring Syntax
const user = {
    userName:'Sunil',
    userAge: 21
};

user.userName // need to use entire object 
// to overcome this by Destructuring Syntax
const { userName } = user;
console.log( userName );

//PROMISE
