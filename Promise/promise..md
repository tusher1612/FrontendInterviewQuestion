````markdown
# Explanation of JavaScript Promises, Event Loop, and Async/Await

This document explains various concepts related to asynchronous JavaScript using Promises, the event loop, and `async/await`. It also provides a detailed explanation of the code examples.

---

## Why Use Promises?

- Promises manage asynchronous operations like fetching data from APIs, reading files, or setting timers.
- In JavaScript, a **Promise** is an object representing the eventual completion or failure of an asynchronous operation.
- Promise states:
  - **Pending**: The operation is ongoing.
  - **Fulfilled**: The operation completed successfully, returning a result.
  - **Rejected**: The operation failed, returning an error.

---

## Creating a Promise

```javascript
const testing = new Promise((Resolved, Rejected) => {
  let success = false;
  if (success) {
    Resolved("Promise is triggered successfully");
  } else {
    Rejected("Promise is rejected");
  }
});

testing.then((data) => console.log(data)).catch((error) => console.log(error));
```
````

- **Explanation**: The promise resolves or rejects based on the `success` flag. The `.then()` method handles the resolved value, and `.catch()` handles errors.

---

## Delayed Promise Execution (setTimeout Example)

```javascript
const promiseTesting = new Promise((Resolved, Rejected) => {
  setTimeout(() => {
    Resolved("Data Fetched Successfully after two seconds");
  }, 2000);
});

promiseTesting
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

- **Explanation**: This promise resolves after 2 seconds using `setTimeout`. The `.then()` logs the result once resolved.

---

## The Event Loop

- **Definition**: The event loop allows JavaScript to handle asynchronous tasks while maintaining its single-threaded nature.
- **Components**:
  - **Call Stack**: Tracks functions currently executing.
  - **Task Queue**: Holds asynchronous tasks like timers and API calls.
  - **Event Loop**: Moves tasks from the queue to the stack when the stack is empty.

### Simple Execution Order Example:

```javascript
console.log("promise starts"); // 1
const promiseTesting = new Promise((Resolved, Rejected) => {
  setTimeout(() => {
    Resolved("Data Fetched Successfully after two seconds"); // 5
  }, 2000);
});
console.log("promise middle"); // 2
promiseTesting.then((data) => console.log(data)); // 5
console.log("promise end"); // 3
```

---

## Why Use Promise Chaining?

- **Purpose**: Run multiple asynchronous operations sequentially.
- **Benefit**: Improves readability by avoiding "callback hell."

### Example:

```javascript
const promise1 = new Promise((Resolved, Rejected) => {
  setTimeout(() => Resolved("Promise1"), 2000);
});

const promise2 = new Promise((Resolved, Rejected) => {
  setTimeout(() => Resolved("Promise2"), 0);
});

promise1
  .then((data) => {
    console.log(data);
    return promise2;
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

---

## Sequential vs. Parallel Execution

### Sequential Execution Using Async/Await:

```javascript
function one() {
  return new Promise((Resolved) => {
    setTimeout(() => Resolved(1), 2000);
  });
}

function two() {
  return new Promise((Resolved) => {
    setTimeout(() => Resolved(2), 200);
  });
}

async function testing() {
  try {
    const trig1 = await one();
    const trig2 = await two();
    console.log("Output of the promises: " + (trig1 + trig2)); // Order 4
  } catch (error) {
    console.log("Error: " + error);
  }
}
```

- **Explanation**: `trig1` waits for `one()` to resolve, followed by `trig2` waiting for `two()`.

---

### Parallel Execution Using `Promise.allSettled`:

```javascript
async function testing() {
  try {
    const output = await Promise.allSettled([one(), two()]);
    console.log(JSON.stringify(output));
  } catch (error) {
    console.log("Error: " + error);
  }
}
```

- **Explanation**: `Promise.allSettled` waits for all promises to either resolve or reject and provides their status and results.

---

## Loader Placement and Finally Block

- **Best Practice**: Use `finally` after `try/catch` to ensure clean-up operations always run.

### Example:

```javascript
async function testing() {
  let myLoader = true;
  try {
    const trig1 = await one();
    const trig2 = await two();
    console.log("Output: " + (trig1 + trig2));
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    myLoader = false; // Clean-up action
  }
}
```

---

## Does `async/await` Block the Main Thread?

- **Answer**: No. `await` pauses the execution of the async function but does not block the main thread. Other tasks continue to run.

### Execution Order Example:

```javascript
console.log("before calling testing()"); // Order 1
testing(); // Order 2 (asynchronous)
console.log("after calling testing()"); // Order 3
```

---

## Summary

- **Promises**: Handle asynchronous operations more cleanly than callbacks.
- **Async/Await**: Syntactic sugar over promises, providing a more readable way to handle asynchronous operations.
- **Event Loop**: Ensures non-blocking execution by managing tasks in the background.
- **Promise.allSettled**: Useful for handling multiple promises in parallel, reporting their results and statuses.

```

```
