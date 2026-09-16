# Programming Assignment Solutions - ATCHAYA LAKSHMI B

Repository: [Virtusa-Team-2](https://github.com/Atchaya0/Virtusa-Team-2.git)  
Contributor: **ATCHAYA LAKSHMI B**

This directory contains solutions to 9 programming problems across 3 different languages (**Java**, **TypeScript**, and **JavaScript**).

---

## 📁 Directory Structure

```
ATCHAYA LAKSHMI B/
├── JAVA/
│   ├── DecimalToBinary.java       # 1. Decimal to binary converter
│   ├── PerfectNumber.java         # 2. Perfect number checker
│   └── SimpleCalculator.java      # 3. Simple calculator with switch-case
├── TYPESCRIPT/
│   ├── AverageOfArray.ts          # 1. Calculate average of elements in an array
│   ├── EvenOrOdd.ts               # 2. Check whether a number is even or odd
│   └── CheckFloatOrInteger.ts     # 3. Check if number is floating-point or integer
├── JAVASCRIPT/
│   ├── groupByFirstChar.js        # 1. Group words by first character using Map
│   ├── toTitleCase.js             # 2. Convert string to title case
│   └── secondSmallest.js          # 3. Find second-smallest element in array
├── package.json                   # Dependencies and npm run scripts
├── tsconfig.json                  # TypeScript compiler options
├── .gitignore                     # Git ignore rules
└── README.md                      # Documentation and run guide
```

---

## ☕ 1. Java Programs

### 1.1 Decimal to Binary (`JAVA/DecimalToBinary.java`)
- **Problem**: Convert a decimal number (base 10) into its binary representation (base 2).
- **Algorithm**: Repeatedly divide the decimal number by 2 and collect remainders in reverse order.
- **Compile & Run**:
  ```bash
  cd "ATCHAYA LAKSHMI B/JAVA"
  javac DecimalToBinary.java
  java DecimalToBinary
  ```

### 1.2 Perfect Number Checker (`JAVA/PerfectNumber.java`)
- **Problem**: Check whether a positive integer is equal to the sum of its proper divisors (excluding itself).
  - *Example*: `6 = 1 + 2 + 3` (Perfect), `28 = 1 + 2 + 4 + 7 + 14` (Perfect).
- **Complexity**: Optimized to $O(\sqrt{N})$ by finding factor pairs.
- **Compile & Run**:
  ```bash
  cd "ATCHAYA LAKSHMI B/JAVA"
  javac PerfectNumber.java
  java PerfectNumber
  ```

### 1.3 Simple Calculator using Switch-Case (`JAVA/SimpleCalculator.java`)
- **Problem**: Perform basic arithmetic operations (`+`, `-`, `*`, `/`, `%`) using a `switch-case` statement. Includes zero-division validation.
- **Compile & Run**:
  ```bash
  cd "ATCHAYA LAKSHMI B/JAVA"
  javac SimpleCalculator.java
  java SimpleCalculator
  ```

---

## 🔷 2. TypeScript Programs

To run TypeScript files directly:
```bash
cd "ATCHAYA LAKSHMI B"
npm install
```

### 2.1 Average of Elements in an Array (`TYPESCRIPT/AverageOfArray.ts`)
- **Problem**: Compute the mean average of an array of numbers using `Array.prototype.reduce()`.
- **Run**:
  ```bash
  npx ts-node TYPESCRIPT/AverageOfArray.ts
  # Or via npm script:
  npm run ts:average
  ```

### 2.2 Even or Odd Checker (`TYPESCRIPT/EvenOrOdd.ts`)
- **Problem**: Determine whether an input number is even or odd with integer validation.
- **Run**:
  ```bash
  npx ts-node TYPESCRIPT/EvenOrOdd.ts
  # Or via npm script:
  npm run ts:even-odd
  ```

### 2.3 Float vs Integer Checker (`TYPESCRIPT/CheckFloatOrInteger.ts`)
- **Problem**: Determine whether a given number is a floating-point number or an integer using `Number.isInteger()` and `num % 1 !== 0`.
- **Run**:
  ```bash
  npx ts-node TYPESCRIPT/CheckFloatOrInteger.ts
  # Or via npm script:
  npm run ts:float-int
  ```

---

## 🟨 3. JavaScript Programs

Run directly using Node.js without any compilation needed:

### 3.1 Group Words by First Character using Map (`JAVASCRIPT/groupByFirstChar.js`)
- **Problem**: Organize words into a JavaScript `Map` where each key is a starting character and value is an array of corresponding words.
- **Run**:
  ```bash
  node JAVASCRIPT/groupByFirstChar.js
  # Or via npm script:
  npm run js:group-words
  ```

### 3.2 Convert String to Title Case (`JAVASCRIPT/toTitleCase.js`)
- **Problem**: Transform a string such that the first letter of each word is capitalized and all subsequent letters are lowercase.
- **Run**:
  ```bash
  node JAVASCRIPT/toTitleCase.js
  # Or via npm script:
  npm run js:title-case
  ```

### 3.3 Find Second-Smallest Element in an Array (`JAVASCRIPT/secondSmallest.js`)
- **Problem**: Find the second-smallest distinct value in an array in single-pass $O(N)$ time.
- **Run**:
  ```bash
  node JAVASCRIPT/secondSmallest.js
  # Or via npm script:
  npm run js:second-smallest
  ```
