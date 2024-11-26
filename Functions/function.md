````markdown
# JavaScript Function Types, Closures, and Concepts

This document covers various types of JavaScript functions, closures, hoisting, and related concepts explained through examples.

---

## **Function Types**

### 1. **Named Function**

A function with a specific name. It can be parameterized or non-parameterized.

```javascript
function test() {
  console.log("Named function + parameterized function");
}
```
````

---

### 2. **Anonymous Function**

A function without a name, often assigned to a variable. It cannot be hoisted.

```javascript
const testing = function (a, b) {
  console.log("Your parameters' addition is: " + (a + b));
};
```

---

### 3. **Arrow Function**

A concise way to write functions. Arrow functions are not hoisted.

```javascript
const testing2 = () => {
  console.log(
    "Arrow function is not hoisted and causes an error if used before declaration."
  );
};
```

---

### 4. **Self-Invoking Function**

A function that executes immediately after it is defined.

```javascript
(function () {
  console.log("Loading...");
})();
```

---

### 5. **Functions as Arguments**

Functions can be passed as arguments to other functions.

```javascript
function argu(testing, a, b) {
  const result = testing(a, b);
  // console.log(result); // undefined because `testing` doesn't return anything
}
argu(testing, 2, 4);
```

---

## **Closures**

A closure allows a function to access variables from its surrounding scope, even after that scope has finished execution.

```javascript
function OuterFunc() {
  let outerVariable = 20;
  function innerFunc() {
    outerVariable = 30;
    console.log("New value from innerFunction: " + outerVariable);
  }
  return innerFunc; // Correctly returning the function without invoking it
}

const output = OuterFunc();
output(); // Outputs: "New value from innerFunction: 30"
```

---

## **Hoisting and Function Concepts**

### 1. **Redeclaration with `let` or `const`**

Using `let` or `const` in the same scope results in a redeclaration error.

```javascript
console.log(test); // ReferenceError
console.log(test(5)); // ReferenceError

const test = function (n) {
  return n;
};
```

---

### 2. **Hoisting with `var`**

When using `var`, the variable is hoisted but not the function.

```javascript
console.log(test); // Undefined
console.log(test(4)); // TypeError: test is not a function

var test = function (n) {
  return n;
};
```

---

## **Deep Copy vs Shallow Copy**

Shallow copies reference the same memory, while deep copies break the connection between the original and the copy.

```javascript
function changeName(obj) {
  obj.name = "Rahim";
}

const obj1 = {
  name: "Rahul",
  age: 20,
  department: "CSE",
};

const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
console.log("Before invoking the function:");
console.log(obj1); // Original object
console.log(obj2); // Deep copied object

changeName(obj1);
console.log("After invoking the function:");
console.log(obj1); // Updated
console.log(obj2); // Unaffected
```

---

## **Nested Functions**

### Example 1: Nested Function with Squares

```javascript
function addSquare(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquare(2, 3)); // 13
console.log(addSquare(4, 5)); // 41
console.log(addSquare(7, 8)); // 113
```

### Example 2: Multi-Level Nested Functions with Closures

```javascript
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3); // Inner-most function
  }
  B(2); // Middle function
}
A(1); // Outputs: 6
```

---

## **Closure and Variable Access**

```javascript
let num1 = 2;
let num2 = 3;
let name = "Tusher";

function test1() {
  num1 = 10;
  num2 = 20;
  function test2() {
    return name + " has total BDT: " + (num1 + num2);
  }
  return test2();
}

console.log(test1()); // Outputs: "Tusher has total BDT: 30"
```

---

## **Key Takeaways**

1. **Function Types:** JavaScript supports various function types like named, anonymous, arrow, and self-invoking functions.
2. **Closures:** Functions retain access to their outer scope, allowing powerful encapsulation and persistence of variables.
3. **Hoisting:** `var` allows hoisting with undefined, but `let` and `const` avoid redeclaration issues.
4. **Deep Copy:** Use techniques like `JSON.parse(JSON.stringify())` to avoid shallow copy issues.
5. **Nested Functions:** They allow encapsulation and structured problem-solving.

```

```
