//why promise is used?
//ans:prmise manage asynchronous operations like:(fetching data form api,reading file, timer setting)
//what is promise?
//ans: In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation. It can be in one of three states:
// Pending: The initial state, waiting for the operation to complete.
// Resolved (Fulfilled): The operation completed successfully, returning a result.
// Rejected: The operation failed, returning an error.

//How to create a promise
// const testing=new Promise((Resolved,Rejected)=>{
//     //success=true;
//     success=false;
//     if(success){
//         Resolved("Promise is triggered successfully");
//     }
//     else{
//         Rejected("Promise is rejected")
//     }

// })

// testing.then((data)=>{
// console.log(data);
// }).catch((error)=>{
// console.log(error)
// });

//now set a promise which will trigger after two seconds
// const promiseTesting=new Promise((Resolved,Rejected)=>{
// setTimeout(()=>{
// Resolved("Data Fetched Succesfully after two seconds");
// },2000)
// })


// promiseTesting.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

//what is event loop 

// The event loop is a process that allows JavaScript to handle asynchronous tasks like timers, API requests, and user interactions, while still being single-threaded. It ensures your code runs smoothly without blocking the execution of other tasks.
// Simple Explanation:
// Call Stack:

// This is where JavaScript keeps track of functions that are currently running.
// Functions are added to the stack when called and removed when they finish.
// Task Queue (Callback Queue):

// Asynchronous tasks like setTimeout or API calls go to this queue after finishing their work.
// Event Loop:

// The event loop keeps checking if the call stack is empty.
// If it's empty, the event loop takes tasks from the task queue and adds them to the call stack to be executed.

//Question:1
// console.log("promise starts");//it will be consoled first
// const promiseTesting=new Promise((Resolved,Rejected)=>{
//     setTimeout(()=>{
//     Resolved("Data Fetched Succesfully after two seconds");//lastly it will be printed
//     },2000)
//     })
    
//     console.log("promise middle")//it will print second 
//     promiseTesting.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
//  console.log("promise end")//it will print third 


//Why Use Promise Chaining?
// It allows you to run multiple asynchronous operations sequentially.
// Each .then() waits for the previous one to complete before running.
// Helps keep your code clean and readable, instead of using deeply nested callbacks (callback hell).

// const promise1=new Promise((Resolved,Rejected)=>{
//     setTimeout(()=>{
//     Resolved("Promise1");
//     },2000)
//     })
    
//   const promise2=new Promise((Resolved,Rejected)=>{
//     setTimeout(()=>{
//         Resolved("Promise2")
//     },0)
//   })
//   promise1.then((data)=>{
//         console.log(data);

//         promise2.then((data)=>{
//             console.log(data);
            
//         }).catch((error)=>{
//             console.log(error);
//         })

//     }).catch((error)=>{
//         console.log(error);
//     })
//  console.log("promise end")//it will print third 

// Which to Use?
// Use Promises when you need to manage multiple asynchronous
// operations in a more flexible way (like parallel operations or conditional chaining).
// Use async/await for cleaner, more readable code when you are working with a <b>
//Async and await are syntactic sugar 
//series of asynchronous tasks that need to happen sequentially.
//where to place loader smartly ans:use finally after catch block there will a finally { }
function one(){
    const promise1=new Promise((Resolved,Rejected)=>{
        setTimeout(()=>{
        Resolved(1);
        },2000)
        })
        return promise1;
}

function two(){
    const promise2=new Promise((Resolved,Rejected)=>{
        setTimeout(()=>{
            Resolved(2)
        },200)
      })
      return promise2;//we have to return the promise otherwise it will show undefined
}

// async function testing() {
//     let myloader=true;
//     try{
//      const trig1=await one();
//      const trig2=await two();
//      console.log("output of the promise"+trig1)
//      console.log("output of the promise"+trig2)
 
//     }
//     catch(error){
//        console.log(error)
//     }
//     finally{//concept of graduation
//         //this block will always run run try or catch block everytime
//         myloader=true;
//     }
// }

// testing();

//above promises are trigered sequentially 
//we need to make them called parallelly  by using await Promise.all([])/ Promise.allSettled
//all will execute the promise and if any promise error it will jump to the error block and execution
//allSettled will show the result and status of  the every promise
// async function testing() {
   
//     try{
//       const trig1=await one();
//       const trig2=await two();
//       console.log("output of the promise"+trig1)
//      console.log("output of the promise"+trig2)
//     const output=await Promise.allSettled([one(),two()]);
//     console.log(JSON.stringify(output));
 
//     }
//     catch(error){
//        console.log("error is "+ error)
//     }
    
// }

// testing();
//Does async await block JS main thread ? ans: no
async function testing() {
   console.log("before await");//order 2
    try{
     const trig1=await one();
     const trig2=await two();
     console.log("output of the promises"+(trig1+trig2));//order4 
     console.log("After await ")//last as it acting like a nested 
     //promise therefore before resolving the promises this line won't be executed 
    // const output=await Promise.allSettled([one(),two()]);
    // console.log(JSON.stringify(output));
 
    }
    catch(error){
       console.log("error is "+ error)
    }
    
}
console.log("before calling Testing()");//ordeer1
testing();
console.log("After calling Test()");//order 3