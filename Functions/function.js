// function types(parameterized, non parameterized function )
//named function
//anonymous fucnction 
//arrow funtion 
//self invoking function 

//named function if we use parameter than it is parameterized 
// function test(){
//     console.log("namefucntion+parameterized function")
// }
//anonymous function which will cause a reference error for hoisting 
// const testing=function(a,b){
//     console.log("your parameters addition is :"+(a+b));
// }
// //arrow funtion is not hoisted 
// const testing2=()=>{
//     console.log("arrow function is not hoisted and cause error");
// }
//self invoking function 
//(function(){
  //  console.log("Loading.....");
//})();
// //we can pass function as argument
// function argu(testing,a,b){
//    const result= testing(a,b);
//    // console.log(result);//this will show undefined as we are not return anything from the testing function
// }
//argu(testing,2,4)

//  CLOSURE
//A closure allows a function to access variables outside its own block, from where it was created.

// function OuterFunc(){
//     let outerVaribable=20;
//     function innerFunc(){
//         outerVaribable=30;
//         console.log("New value from innerFunction"+outerVaribable)
//     }
//     return innerFunc;//here we tried to return with  mistake:innerFunc(): which is a mistake returning a undefined value. so 
// }
// const output=OuterFunc();
//output();

//Question1: 
//console.log(test);// both line will have a redeclaration  error as test is hoisted but it is in temporal deadzone
//console.log(test(5));//it will also show a variable redeclaration  error
//it will work as same for let also 
// const test=function (n){
//     return n
// }

//Question2
//hoisting+funtion concept
// console.log(test)//here test is hoisted as it is var than it will show undefined
// console.log(test(4));//test variable is hoisted bu not the function. so it will not recognize the function
// var test=function (n){
//     return n
// }

//Question3:
//deep copy shallowcopy concept 
// function changeName(obj){
//  obj.name="Rahim"
// }

// const obj1={
//     name:"Rahul",
//     age:20,
//     department:"Cse"
// }
// obj2=JSON.parse(JSON.stringify(obj1)); //here we can break the shallow copy by using {...} or JSON.parse(JSON.Stringify())
// console.log("before invoking the function")
// console.log(obj1);
// console.log(obj2);
// changeName(obj1);
// console.log("after invoking the function")
// console.log(obj1);
// console.log(obj2);

//Queston4
// function closure concept
num1=2;
num2=3;
name="Tusher"

function test1(){
    num1=10;
    num2=20;
    function test2(){
        return name+" has total BDT:"+ (num1+num2);//here for name conflict the local variable will get priority and 
           //for the closure name will be accessed by test1()
           //if we return with () then it will perform addition otherwise it will concat
           //tread num1+num2 as  string 
    }
    return test2();//if we return it as test() then it will return value 
    //if we return test2  then it will return the test2 function not the value 
}
//console.log(test1());

//Question4
//nested function

// function addSquare(a,b){

//     function square(x){
//         return x*x;
//     }
//     return square(a)+square(b);
// }

// const a=addSquare(2,3);
// const b=addSquare(4,5);
// const c=addSquare(7,8);

//console.log(a,b,c);

//Question5
//closure and function nesting. first call A. then in block A b is invoking and then in block B  is invoking
function A(x){
    function B(y){
        function C(z){
            console.log(x+y+z); 
        }
        C(3);
    }
    B(2);
}
A(1);