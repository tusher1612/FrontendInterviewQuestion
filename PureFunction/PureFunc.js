//A funtion is pure or not it is based on output of this function 



// pure functions  are deterministic means we know the return value for the argument we are passing 
//  for same input it will give same output  

// function areCalc(height ,width ){
//  return height* width;
// }
// console.log(areCalc(10,20));
// console.log(areCalc(10,20));

// impure funciton are non-deterministic where we dont know the output for the same input 
//for same input it will give different output 
// function areCalc(height ,width ){
//      temp=Math.floor(Math.random()*10);
//     return height* width*temp;
//    }
//    console.log(areCalc(10,20));
//    console.log(areCalc(10,20));


//Question 1 
//what is console.log ? ans: it is a pure fucntion as it returns undefined as output
// let output=console.log("Testing console.log function ");
// console.log(`console.log output is ${output}`); //output will be undefined 

//Question 2
// //why not a pure function though we know it was deterministic 
// function testing(height,width){
//  console.log(height*width);// cause side effects 
//  return height*width ;
// }
// output=testing(2,4)
// console.log(`output result is : ${output}`);
// Side effects: of Queston 2

// The line console.log(height * width) writes to the console.
// This interaction with an external system (the console) is a side effect, as it alters the program’s state outside of the function itself.
// In functional programming, writing to the console, modifying a global variable, or performing I/O operations (e.g., file operations or network calls) are all considered side effects. These side effects make the function 
// impure, even though the return value is deterministic.

// Question3  
// const words=['Tusher','Tushi','Tuhin'];
// const output=words.filter(word=>console.log(word.length>5));//this line's output is the condtion true or false
// //const output=words.filter(word=>word.length>5);// this line returns the value of that contiditon 
// console.log(output)//prints the output [Tusher] 


//Qeustion4  Demo() is impure as console.log is causign side effect 
//loggins , modifying external variable which changes programe's environment by printing to console 
// which cause Side effect 
// function Demo(){
//      const words=['Tusher','Tushi','Tuhin'];
// //const output=words.filter(word=>console.log(word.length>5));//this line's output is the condtion true or false
// const output=words.filter(word=>word.length>5);// this line returns the value of that contiditon 
// console.log(output)//prints the output [Tusher] 
// }

// Demo();

//Question 5
//why pure fucntion is essential ? ans: for it's deterministic behavior and memoaization 



//Qustion 6
// Function to add memoization (caching) to any function
function memoize(fn) {
     const cache = {}; // Store results for previously seen inputs
 
     // Return a new function with caching behavior
     return function (...args) {
         const key = JSON.stringify(args); // Create a unique key for the input
         if (!cache[key]) {
             // If the result is not in the cache, compute it
             cache[key] = fn(...args); 
         }
         return cache[key]; // Return the cached result
     };
 }
 
 // A function to calculate the square of a number
 function square(n) {
     console.log('Performing calculation...'); // Log when computation happens
     return n * n;
 }
 
 // Wrap the square function with memoization
 const memoizedSquare = memoize(square);
 
 console.log(memoizedSquare(5)); // First time: Performs calculation and stores it in cache
 console.log(memoizedSquare(5)); // Second time: Returns the cached result, no calculation
 console.log(memoizedSquare(6)); // New input: Performs calculation for 6
 