//Currying means splitting a function that takes multiple arguments into a chain of functions that each take one argument at a time.
//for nested function you can pass argument for both fucntion at a time and it is function currying
function test1(x,y){
        x=x;
    return function test2(y){
        return x+y;
    }
}
//  output=test1(10,20);//fucntion curying breaking a function into multiple functions takes one argument at at time
// console.log(output(10,20))

//same variation in arrow function 
// const Test1=(a)=>(b)=>a+b;//here is happening Implicit return with out curly braces
// const Test1=(a)=>(b)=>{
    // a=20
//      b=40
//    return  a+b;// explicit return return for multiple line and curly braces 
// };
// Test1(20)(30);
 //console.log(Test1(20)(30));//fucntion curying 
 //Question 2:
 //const Test1=(a)=>(b)=>a+b;

 //console.log(Test1(20,30));

 //how to make a fucntion which accepts add(20)(10) and add(10,20) both 
//  function test1(x){
//     if(arguments.length>1){
//        sum=0;
//         for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//         }
//         return sum;//if we don't return anything then it will return undefined 
//     }else {
//           return function test2(y){
//             return x+y;    
//             //if we call it with currying then it will return the value directly instead of returning this function
//             //as we are invokig the both function 
//     }
// }
//  }
//  console.log("Without currying:" +test1(10,20));
//  console.log("With currying:" +test1(10)(20));

//now  solving this question with recursion 

function add(a) {
 return function(b){
    if(b !==undefined){
        return add(a+b);
    }
    else {
        return a ;
    }
 }
}

console.log(add(10)(20)(20)());
// function add(a) {
//     return function(b) {
//       if (b !== undefined) {
//         return add(a + b); // Recursive call with updated sum
//       } else {
//         return a; // Return final sum when no more arguments
//       }
//     };
//   }
  
//   // Usage
//   console.log(add(10)(20)(30)()); // Output: 60
  