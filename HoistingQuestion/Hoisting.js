//hoisting concept
//We can hoist funtion but not it's expression and arrow function of ES6



//test()
// const test=()=>{  this function will output can not acces or reference error 
//     console.log("hoisting");
// }


// function test(){ //this function will output hoisting as function is hoisted properly 
//     console.log("Hoistiing");
// }

// here comes the variable part 
//console.log(x); //for var it will be initialized as undefined and then it will be shown 
//for let  and const it will give a reference error 
// var x;
//  let x; this will create a reference error 
// const x; by default error as  need to  be initialized first as it is const 


//hosting interview code snipped 

//QUESTION 1 // FOR var it will use the recent values 
// function test(){
//     var x =10;
//     var x=20;
//      console.log(`x is ${x}`);
//      console.log(x)
// }

//QUESTION 2  the local var of that same variable will get priority if the vairable is globally decleared 
// function test(){ 
//     var x =10;
//    {
//     var x=20;
//     console.log(`x is ${x}`);
//    }
//    console.log(x)
// }

//question 3 for let global variable will work globally and local variable will work locally 
// function test(){
//     let x=10
//     {
//         let x=20
//         console.log(`local  scope X ${x}`)
//     }
//     console.log(`global scope X ${x}`)
// }

//Question 4 const and let works same scope wise global will print global local will print local 


// function test(){
//     console.log(`global scope X ${x}`)
//     {   console.log(`local  scope X ${x}`)
//         var   x=20;  
       
//     }
//      var x=10
// }

//Question5 for var keyword for same variable local variable get priority first 
// var x=10;
// function test(){
//     if (x==undefined){
//        var  x=20;
//         console.log(x)
//     }
//     else {
//        var  x=30;
//         console.log(x)
//     }
// }


//Question 6   const funtion can not be hoisted and Temporal dead zone explaination
//Temporal deadzoen starts 
const test=()=> console.log(letvar);
//temporal deadzoen 
let letvar=3; // temporal deadzone ends here 
test()
//test()

//Queston 7: why hoisting is present in the JavaSCript ?
//Ans: beacuse of JavaScirpt's compilaation process in two steps :
// creation--> create / allocate memory space for vairables and funtion 
//Execution --> executes the whole code  line by line by interpreter 
