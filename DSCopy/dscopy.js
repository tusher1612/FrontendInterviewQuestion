//Deep copy and Shallow copy
//Deep copy means all new values are copied and there is no connection between two variables

//Deep copy
//primitives --> number, boolean , string 
// let x=20;
//  y=x;
// console.log(y)
// y= 30; // by updating y is not effecting X. so it is deep copy
// console.log(y)

//shallow copy 
// let arr1=[1,2,3,4];
// arr2=arr1;
// arr2.push(5);
// console.log(arr1)//here we can see the value of array 1 is effected or manupulated by the change through the value of array2
// console.log(arr2)//it will show updated array 

//Question 1 -break the connection of the shallow copy and make it a deep copy for array

// function test(){
//     let arr1=[1,2,3,4];
//     arr2=[...arr1]; // here we are beaking the connection by adding ternary operator it breaks the connection make a deep copy of arr1
//     arr2.push(5);
//     console.log(arr1)//here we can see the value of array 1 is effected or manupulated by the change through the value of array2
//     console.log(arr2)// this value will change 
// }

//test();

//Question 2 make a deep copy of a object

// const user1={
//     name:"Vasooli",
//     age:25,
//     location:{
//         city:"Rumbalala",
//         state:"Bengaluru"
//     }
// }

// user2=Object.assign({},user1);// here is happening the shallow copy// we will use {...} operator or  to make it deep copy
// //we can also use Object.assign({},user1)
// user2.name="Raja";
// console.log(user1)
// console.log(user2)

//Question 3 for nested objcet  make it a shallow copy 

const user1={
        name:"Vasooli",
        age:25,
        location:{
            city:"Rumbalala",
            state:"Bengaluru"
        }
    }
    
    user2=JSON.parse(JSON.stringify(user1));//we will use JSON.parse(JSON.strignfy)
    //here Object.assign({},user) or {...} these two methods won't work 
  
    user2.location.city="Hulala";
    console.log(user1)
    console.log(user2)