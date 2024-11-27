
# Function Currying in JavaScript

Currying is a technique of transforming a function that takes multiple arguments into a series of functions, each taking a single argument. This allows for partial application of functions.

---

## 1. **Basic Function Currying Example:**
```js
// Currying means splitting a function that takes multiple arguments into a chain of functions 
// that each take one argument at a time.
function test1(x, y) {
    x = x;
    return function test2(y) {
        return x + y;
    }
}

// Example usage:
const output = test1(10);
console.log(output(20)); // Output: 30
```
- **Explanation:**  
  - `test1` returns a new function (`test2`) that takes a second argument (`y`).  
  - You can pass arguments one at a time (`test1(10)(20)`).
  - The second call (`test2`) adds the values of `x` and `y`.

---

## 2. **Arrow Function Currying:**
```js
// Same variation in an arrow function
const Test1 = (a) => (b) => a + b;

console.log(Test1(20)(30)); // Output: 50
```
- **Explanation:**  
  - This is a curried function using arrow function syntax.  
  - It demonstrates **implicit return**, where no curly braces (`{}`) are needed, and the result is automatically returned.

### **Explicit Return Example:**
```js
const Test1 = (a) => (b) => {
    a = 20;
    b = 40;
    return a + b;
};

console.log(Test1(20)(30)); // Output: 60
```
- **Explanation:**  
  - When curly braces are used, an explicit `return` statement is required.

---

## 3. **Handling Both Curried and Normal Calls:**
### Goal: Write a function that accepts both `add(20, 10)` and `add(20)(10)`.
```js
function test1(x) {
    if (arguments.length > 1) {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    } else {
        return function test2(y) {
            return x + y;
        }
    }
}

// Usage:
console.log("Without currying: " + test1(10, 20)); // Output: 30
console.log("With currying: " + test1(10)(20));   // Output: 30
```
- **Explanation:**  
  - The function checks if more than one argument is passed (`arguments.length > 1`).  
  - If true, it sums up the arguments directly.  
  - Otherwise, it returns a curried function (`test2`).

---

## 4. **Recursive Currying Function:**
```js
function add(a) {
    return function(b) {
        if (b !== undefined) {
            return add(a + b); // Recursive call with updated sum
        } else {
            return a; // Return final sum when no more arguments
        }
    };
}

// Usage:
console.log(add(10)(20)(30)()); // Output: 60
```
- **Explanation:**  
  - This function uses recursion to handle an indefinite number of arguments.  
  - The base case checks if `b` is `undefined`. If so, it returns the accumulated sum (`a`).  
  - Otherwise, it continues to call itself with the updated sum (`a + b`).

---

## **Key Concepts in Currying:**
1. **Implicit Return:**  
   - Arrow functions without curly braces automatically return the result.  
   Example: `(a) => a + b`.

2. **Explicit Return:**  
   - When using curly braces in arrow functions, an explicit `return` statement is required.  
   Example: `(a) => { return a + b; }`.

3. **Recursive Currying:**  
   - A recursive approach allows for handling an indefinite number of arguments.

---

## **Summary:**
- Currying breaks a function into multiple functions that take one argument at a time.  
- It can be implemented using regular functions or arrow functions.  
- Recursive currying allows flexibility to handle varying numbers of arguments.

---

### Example Recap:
```js
console.log(add(10)(20)(30)()); // Output: 60
```
