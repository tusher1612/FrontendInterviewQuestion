---

# **JavaScript Operator Precedence and Unary Operators Cheat Sheet**

### **Code Analysis and Explanations:**

```js
console.log("AB" + "C"); 
```
- **Output:** `ABC`
- **Explanation:** The `+` operator concatenates strings when both operands are strings.

---

```js
console.log("AB" - "D");
```

- **Output:** `NaN` (Not a Number)
- **Explanation:** The `-` operator expects numbers. When used with strings, JavaScript tries to convert the strings to numbers, but fails, resulting in `NaN`.

---

```js
console.log(1 - "D");
```

- **Output:** `NaN`
- **Explanation:** `1` is a number, but `"D"` cannot be converted to a number, so the result is `NaN`.

---

### **Operator Precedence and Associativity:**

JavaScript follows a specific order when evaluating expressions, known as **operator precedence**. Operators with higher precedence are evaluated before those with lower precedence.

| **Operator**    | **Description**        | **Associativity** | **Precedence** |
| --------------- | ---------------------- | ----------------- | -------------- |
| `()`            | Parentheses            | N/A               | 19             |
| `/`             | Division               | Left-to-right     | 14             |
| `*`             | Multiplication         | Left-to-right     | 14             |
| `+` / `-`       | Addition / Subtraction | Left-to-right     | 13             |
| Unary `+` / `-` | Unary Plus / Minus     | Right-to-left     | 15             |

---

### **Examples of Unary Operators:**

```js
console.log(+"5");
```

- **Output:** `5`
- **Explanation:** The unary `+` operator converts the string `"5"` into a number `5`.

```js
console.log(-true);
```

- **Output:** `-1`
- **Explanation:** `true` is treated as `1`. The unary `-` negates it, resulting in `-1`.

```js
console.log(+false);
```

- **Output:** `0`
- **Explanation:** `false` is treated as `0`. The unary `+` keeps it as `0`.

```js
console.log(-false);
```

- **Output:** `-0`
- **Explanation:** Negating `0` results in `-0`, which is distinct in JavaScript due to IEEE 754 floating-point representation.

---

### **String and Number Concatenation Examples:**

```js
console.log(+"1" + "1" + "2");
```

- **Output:** `112`
- **Explanation:**
  - `+"1"` converts the string `"1"` to the number `1`.
  - `1 + "1"` results in `"11"` (number is coerced to a string).
  - `"11" + "2"` results in `"112"`.

```js
console.log(+"a" - "b" + 2);
```

- **Output:** `NaN`
- **Explanation:**
  - `+"a"` and `"b"` cannot be converted to numbers, so the subtraction results in `NaN`.
  - Adding `2` to `NaN` still results in `NaN`.

```js
console.log(+"a" - "b" + "2");
```

- **Output:** `NaN`
- **Explanation:** Same as above, except the final result concatenates `"2"` with `NaN`.

---

### **Order of Operations Example:**

```js
console.log(5 + 3 * 2 - 2 / 6);
```

- **Breakdown:**
  - Multiplication (`3 * 2`) = `6`
  - Division (`2 / 6`) = `0.3333`
  - Addition (`5 + 6`) = `11`
  - Subtraction (`11 - 0.3333`) ≈ `10.6667`
- **Output:** `10.666666666666666`

---

### **Summary of Concepts:**

1. **Operator Precedence:** Determines the order in which operators are evaluated.
2. **Unary Operators (`+`, `-`):** Used to convert values or negate them.
3. **String vs Number Operations:** The `+` operator can either concatenate strings or add numbers based on operand types.
4. **NaN (Not a Number):** Results when an operation cannot produce a valid number.

---
