// pure functions  are deterministic means we know the return value for the argument we are passing 
//  for same input it will give same output  

// function areCalc(height ,width ){
//  return height* width;
// }
// console.log(areCalc(10,20));
// console.log(areCalc(10,20));

// impure funciton are non-deterministic where we dont know the output for the same input 
//for same input it will give different output 
function areCalc(height ,width ){
     temp=Math.floor(Math.random()*10);
    return height* width*temp;
   }
   console.log(areCalc(10,20));
   console.log(areCalc(10,20));