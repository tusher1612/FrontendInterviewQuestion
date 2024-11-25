# README: Understanding Pure and Impure Functions, Side Effects, and Memoization

## Overview

This document explains the difference between pure and impure functions, the concept of side effects, and the importance of memoization in functional programming. It also provides examples and answers to several related questions.

---

### **Pure vs Impure Functions**

1. **Pure Functions**:

   - A pure function always produces the same output for the same input. It does not depend on any external state or cause any side effects.
   - Example:
     ```javascript
     function areCalc(height, width) {
       return height * width;
     }
     console.log(areCalc(10, 20)); // Output: 200
     console.log(areCalc(10, 20)); // Output: 200
     ```

2. **Impure Functions**:
   - An impure function may produce different outputs for the same input due to external factors (e.g., randomness or reliance on external state). Impure functions often cause side effects.
   - Example:
     ```javascript
     function areCalc(height, width) {
       const temp = Math.floor(Math.random() * 10); // Introduces randomness
       return height * width * temp;
     }
     console.log(areCalc(10, 20)); // Output: Random value depending on `temp`
     console.log(areCalc(10, 20)); // Output: Different value due to randomness
     ```

---

### **Question 1: Is `console.log` a Pure Function?**

**Answer**: `console.log` is not a pure function because it causes side effects. It writes to the console, which modifies the program's state outside of the function, and always returns `undefined`.

```javascript
let output = console.log("Testing console.log function");
console.log(`console.log output is ${output}`); // Output: undefined
```

---

### **Question 2: Why is the `testing` Function Impure?**

The function `testing` is impure because it writes to the console (a side effect), even though its return value is deterministic.

```javascript
function testing(height, width) {
  console.log(height * width); // Side effect: writes to console
  return height * width;
}

const output = testing(2, 4);
console.log(`output result is: ${output}`); // Output: 8
```

- **Side Effects**: Writing to the console alters the program’s environment, making the function impure.

---

### **Question 3: Impure Function Example with `filter`**

```javascript
const words = ["Tusher", "Tushi", "Tuhin"];
const output = words.filter((word) => console.log(word.length > 5)); // This line logs a condition check
console.log(output); // Output: [Tusher]
```

- The `console.log` inside the `filter` function causes side effects. It writes to the console every time the condition is evaluated, making this function impure.

---

### **Question 4: Why is `Demo()` Impure?**

In this case, the `Demo()` function is impure because it uses `console.log`, which causes a side effect by printing to the console.

```javascript
function Demo() {
  const words = ["Tusher", "Tushi", "Tuhin"];
  const output = words.filter((word) => word.length > 5); // This line returns the condition value
  console.log(output); // Side effect: writes to console
}

Demo();
```

- **Side Effects**: Writing to the console is a side effect, which makes the `Demo()` function impure.

---

### **Question 5: Why Are Pure Functions Essential?**

**Answer**: Pure functions are essential because they are deterministic, meaning that for the same input, they always produce the same output. This predictability is crucial for debugging, testing, and optimizing code (e.g., memoization). Memoization can be used with pure functions to improve performance by caching results for repeated calls with the same inputs.

---

### **Question 6: Memoization Example**

Memoization is a technique where the result of a function is cached so that if the same input occurs again, the cached result is returned, improving performance.

```javascript
function memoize(fn) {
  const cache = {}; // Store results for previously seen inputs
  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for the input
    if (!cache[key]) {
      cache[key] = fn(...args); // If the result is not in cache, compute and store it
    }
    return cache[key]; // Return the cached result
  };
}

function square(n) {
  console.log("Performing calculation..."); // Log when computation happens
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // First time: Performs calculation and stores it in cache
console.log(memoizedSquare(5)); // Second time: Returns the cached result, no calculation
console.log(memoizedSquare(6)); // New input: Performs calculation for 6
```

- **First Call**: The result of `5 * 5` is computed and stored in the cache.
- **Second Call**: The cached result is returned, and no calculation is performed.
- **New Input**: A new calculation for `6 * 6` is performed and cached.

---

### **Summary**

- **Pure Functions**: Functions that always return the same output for the same input and cause no side effects.
- **Impure Functions**: Functions that may produce different outputs for the same input or cause side effects (e.g., writing to the console).
- **Memoization**: A technique to optimize functions by caching results for repeated inputs, most effective with pure functions.


```

---

```
