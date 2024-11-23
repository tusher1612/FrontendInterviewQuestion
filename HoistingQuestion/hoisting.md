# Hoisting in JavaScript - Summary and Code Explanation

This README provides a comprehensive guide to the concept of **hoisting** in JavaScript, including block-level scope, the temporal dead zone (TDZ), and variable/function hoisting. Examples and answers to common interview questions are provided for better understanding.

---

## **Key Concepts**

### 1. **Function Hoisting**

- **Function Declarations**: Hoisted, allowing them to be invoked before their definition.
- **Function Expressions and Arrow Functions**: Not hoisted. Attempting to access them before their definition results in a `ReferenceError`.

### 2. **Variable Hoisting**

- **`var`**: Hoisted to the top of the scope and initialized to `undefined`. Accessing it before declaration doesn’t cause an error but returns `undefined`.
- **`let` and `const`**: Hoisted but are in a **temporal dead zone** until their declaration is encountered. Accessing them before declaration results in a `ReferenceError`.

### 3. **Block-Level Scope**

- Variables declared with `let` and `const` are limited to the block (enclosed in `{}`) where they are defined.
- Variables declared with `var` ignore block scope and are scoped to the containing function or globally if no function exists.

### 4. **Temporal Dead Zone (TDZ)**

- The TDZ is the period between entering a scope and the actual declaration of a variable. During this time, the variable cannot be accessed, even though it is hoisted.

---

## **Code Examples**

### **1. Function Hoisting**

```javascript
// Function Declaration (Hoisted)
test();
function test() {
  console.log("Function hoisting works!");
}

// Function Expression (Not Hoisted)
// test(); // ReferenceError
const test = () => {
  console.log("Not hoisted.");
};
```

### **2. Variable Hoisting with `var`, `let`, and `const`**

```javascript
// `var` Example
console.log(x); // undefined (hoisted and initialized)
var x = 10;

// `let` Example
// console.log(y); // ReferenceError (TDZ applies)
let y = 20;

// `const` Example
// console.log(z); // ReferenceError (TDZ applies)
const z = 30;
```

---

## **Interview Questions**

### **Question 1: Hoisting with `var` - Recent Value**

```javascript
function test() {
  var x = 10;
  var x = 20; // Redeclaration allowed with `var`
  console.log(`x is ${x}`); // Output: x is 20
}
test();
```

### **Question 2: Hoisting with `var` - Block Scope**

```javascript
function test() {
  var x = 10; // Global scope within the function
  {
    var x = 20; // Overrides the outer `x`
    console.log(`Block scope x: ${x}`); // Output: x is 20
  }
  console.log(`Global scope x: ${x}`); // Output: x is 20
}
test();
```

### **Question 3: Hoisting with `let` - Scope Handling**

```javascript
function test() {
  let x = 10; // Global scope
  {
    let x = 20; // Local scope
    console.log(`Local scope x: ${x}`); // Output: x is 20
  }
  console.log(`Global scope x: ${x}`); // Output: x is 10
}
test();
```

### **Question 4: Hoisting with `const`**

```javascript
function test() {
  const x = 10; // Global scope
  {
    const x = 20; // Local scope
    console.log(`Local scope x: ${x}`); // Output: x is 20
  }
  console.log(`Global scope x: ${x}`); // Output: x is 10
}
test();
```

### **Question 5: `var` Keyword - Local Variable Priority**

- When using `var`, a local variable inside the function takes precedence over the global variable with the same name. Due to hoisting, the local variable is declared but not initialized at the top of the function scope.
- This can lead to unexpected behavior when checking `undefined`.

**Code Example:**

```javascript
var x = 10; // Global variable
function test() {
  if (x == undefined) {
    // Checks the local `x`, not the global one
    var x = 20; // Local `x` initialized to 20
    console.log(x); // Output: 20
  } else {
    var x = 30; // Local `x` initialized to 30
    console.log(x); // Output: 30
  }
}
test();
```

**Explanation:**

1. Inside the `test` function, `var x` is hoisted to the top of the function scope but remains uninitialized (`undefined`) until its assignment.
2. The `if` condition evaluates the local `x` (hoisted but `undefined`), ignoring the global `x`.
3. The `var x` is then assigned `20` or `30` based on the condition.

---

### **Common Pitfall: Using `var` with Hoisting**

```javascript
function test() {
  console.log(x); // Output: undefined (hoisted but not initialized)
  {
    var x = 20; // Variable hoisted within function scope
  }
  var x = 10; // Reassignment
  console.log(x); // Output: 10
}
test();
```

---

## **Summary**

- **`var`**: Hoisted and initialized as `undefined`, accessible within its function or global scope.
- **`let` and `const`**: Hoisted but remain in the **temporal dead zone** until declared. They follow **block-level scoping**.
- **Function Declarations**: Hoisted and accessible anywhere in the scope.
- **Function Expressions/Arrow Functions**: Not hoisted; accessing them before their definition causes errors.
- **Local Variable Priority**: Local variables declared with `var` take precedence over global variables, even if they are hoisted but uninitialized.

Understanding block-level scope, the temporal dead zone, and hoisting behavior helps write predictable, bug-free JavaScript code.
