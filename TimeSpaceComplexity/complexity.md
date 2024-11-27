### 🚀 **Time and Space Complexity Cheat Sheet**

---

## **I. What is Time Complexity?**

Time complexity measures **how the runtime of an algorithm increases** as the input size grows.

### **Common Time Complexities:**

| Complexity       | Notation   | Example                         | Description                                           |
| ---------------- | ---------- | ------------------------------- | ----------------------------------------------------- |
| **Constant**     | O(1)       | Accessing an array element      | Always takes the same time, no matter the input size. |
| **Logarithmic**  | O(log n)   | Binary search                   | Reduces the problem size exponentially.               |
| **Linear**       | O(n)       | Single loop through an array    | Grows proportionally with input size.                 |
| **Linearithmic** | O(n log n) | Merge sort                      | Combination of linear and logarithmic work.           |
| **Quadratic**    | O(n²)      | Nested loops                    | Time grows exponentially with input size.             |
| **Exponential**  | O(2^n)     | Recursive Fibonacci calculation | Grows very rapidly with input size.                   |
| **Factorial**    | O(n!)      | Generating permutations         | Grows faster than exponential.                        |

---

## **II. What is Space Complexity?**

Space complexity measures **how much additional memory an algorithm uses** as the input size grows.

### **Common Space Complexities:**

| Complexity      | Notation | Example                      | Description                                             |
| --------------- | -------- | ---------------------------- | ------------------------------------------------------- |
| **Constant**    | O(1)     | Swapping two variables       | Uses the same amount of space regardless of input size. |
| **Linear**      | O(n)     | Storing elements in an array | Space grows proportionally with input size.             |
| **Logarithmic** | O(log n) | Binary search                | Uses minimal additional space.                          |

---

## **III. Steps to Calculate Time Complexity**

1. **Identify Basic Operations**: These are the core actions like comparisons, assignments, or arithmetic operations.
2. **Count the Operations**: Count how often the basic operations are executed based on the input size `n`.
3. **Ignore Constants and Lower-Order Terms**: Focus on the term with the highest growth rate.
4. **Express Using Big-O Notation**: This abstracts away constants and lower-order terms.

---

## **IV. Examples and Calculations:**

---

### **Example 1: Constant Time – O(1)**

```javascript
function getFirstElement(arr) {
  return arr[0];
}
```

- **Explanation**: The function always takes one step, regardless of the array size.
- **Time Complexity**: **O(1)**.

---

### **Example 2: Linear Time – O(n)**

```javascript
function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

- **Explanation**: The loop runs `n` times, where `n` is the length of the array.
- **Calculation**:
  - Operation count ≈ `n` iterations.
- **Time Complexity**: **O(n)**.

---

### **Example 3: Quadratic Time – O(n²)**

```javascript
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

- **Explanation**: There are two nested loops, each running `n` times.
- **Calculation**:
  - Outer loop: `n` iterations.
  - Inner loop: For each outer iteration, runs `n` times.
  - Total = `n * n = n²`.
- **Time Complexity**: **O(n²)**.

---

### **Example 4: Logarithmic Time – O(log n)**

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

- **Explanation**: The input size is halved on each iteration.
- **Calculation**:
  - Each step reduces the problem by half: `n → n/2 → n/4 → ... → 1`.
  - Total steps ≈ `log₂(n)`.
- **Time Complexity**: **O(log n)**.

---

### **Example 5: Factorial Time – O(n!)**

```javascript
function generatePermutations(str) {
  if (str.length <= 1) return [str];
  let permutations = [];
  for (let i = 0; i < str.length; i++) {
    let rest = str.slice(0, i) + str.slice(i + 1);
    let restPerms = generatePermutations(rest);
    for (let perm of restPerms) {
      permutations.push(str[i] + perm);
    }
  }
  return permutations;
}
```

- **Explanation**: The function generates all permutations, leading to `n!` operations.
- **Time Complexity**: **O(n!)**.

---

## **V. Tips to Master Time and Space Complexity:**

1. **Understand Loops**: The number of nested loops gives a strong hint about complexity.
   - Single loop: O(n)
   - Two nested loops: O(n²)
2. **Break Down Recursion**: Use a **recursion tree** to analyze recursive algorithms.
3. **Ignore Constants**: Big-O notation abstracts away constants (e.g., O(2n) → O(n)).
4. **Halving Problems**: Look for logarithmic behavior when input size is halved (binary search).
5. **Practice**: Analyze simple algorithms and gradually move to more complex ones (sorting, searching, dynamic programming).

---
