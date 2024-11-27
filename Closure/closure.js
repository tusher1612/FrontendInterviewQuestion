//Counter dilemma problem with 2nd optimal solution

// function Inc(){
//     let count=0;
//     function inc2(){
//         return count=count+1;
//     }
//     return inc2;// if we return as value then we we will execute it from the begining again
//     //if we return it as fucntion reference then the 2nd and third invoke will be from inc2 block as
     
// }
// const test=Inc()
// console.log(test());
// console.log(test());
// console.log(test());

//Counter dilemma problem with the most optimal solution with self invoking function

// const counting=(function(){
//     let count=0
//      return function(){
//         return ++count
//      }
// })()

// console.log(counting())
// console.log(counting())
// console.log(counting())

//when in a nested function if you invoke inner function within the fucntion then it is called lexical scope
//it is a example of Lexical scope
// function Test1(){
//     name="Tusher";
//     function Test2(){
//         console.log(name);
//     }
//     Test2();
// }
// Test1()
//what is the difference between closure and lexical scope
//lexical scope it's rule of accessing outer variable and closure use this rule to remember the value
// after the outer function execution


//Question3:
// function Adder(x){
//      return function addition(y){
//             return x+y
//      }
// }
// const tester=Adder(5);//first we invoked adder which returns addtion function
// console.log(tester(5));//here we invoked addition function and it has access to value X for closure 

//Question 4:
//concept of self invoking function and closure
//tricky question
// (function Invoke1(a){
//   return (function Invoke2(b){
//            console.log(a);//a access for closure concept output will be 3
//   })(4);//here we are invoking Invoke2 function through (4)

// })(3);// here we are Invokinv Invoke1 function through (3);

//Question5:
//

// function test(){
//     for(var i=0; i<4;i++){
//         setTimeout(function(){
//           console.log(i);
//         },1000)
//     }
// }
//test();//ourput will be 3,3,3 for var gloabal or function scope

// if we want to make it 0,1,2 then we have to make it block scope with let 
// function test2(){
//     for(let i=0; i<4;i++){
//         setTimeout(function(){
//           console.log(i);
//         },1000)
//     }
// }
// test2();
//Queston5: make it 0,1,2 without let as many browser does not support it
function test2(){
    
        for(let i=0; i<4;i++){
            function testing(j){
            setTimeout(function(){
                console.log(j);
              },1000)
              
            }
            testing(i)
        }
    }
    test2();