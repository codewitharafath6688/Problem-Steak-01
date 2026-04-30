# 🔥 JavaScript Reduce Practice Problems (Hard Level)

These problems are designed to master `reduce()` with real-world problem solving patterns like grouping, frequency count, and finding max/min.

---

## 🚀 Problem 1: Most Frequent Word

```js
const sentence = "js is fun and js is powerful and js is everywhere";
```

### 🎯 Task:
- Count how many times each word appears
- Find the most frequent word

### ✅ Expected Output:
```js
"js"
```

### 💡 Hint:
- Convert string → array using `split(" ")`
- Use `reduce()` to count frequency
- Find max from the result

---

## 🚀 Problem 2: Highest Earning Customer

```js
const orders = [
  { customer: "A", amount: 500 },
  { customer: "B", amount: 300 },
  { customer: "A", amount: 700 },
  { customer: "C", amount: 400 },
  { customer: "B", amount: 900 }
];
```

### 🎯 Task:
- Calculate total spending per customer
- Find the customer who spent the most

### ✅ Expected Output:
"B"

### 💡 Hint:
- Group by `customer`
- Sum amounts using `reduce()`
- Find max value

---

## 🚀 Problem 3: Most Sold Product Category

```js
const sales = [
  { category: "Electronics", product: "Phone", qty: 10 },
  { category: "Electronics", product: "Laptop", qty: 5 },
  { category: "Clothing", product: "Shirt", qty: 20 },
  { category: "Electronics", product: "Phone", qty: 15 },
  { category: "Clothing", product: "Shirt", qty: 10 }
];
```

### 🎯 Task:
- Calculate total quantity per category
- Find the most sold category

### ✅ Expected Output:
"Clothing"

### 💡 Hint:
- Group by `category`
- Sum `qty`
- Find max category

---

## 🚀 Problem 4: Find Duplicate Elements

```js
const arr = [1, 2, 3, 4, 2, 3, 5, 6, 3];
```

### 🎯 Task:
- Find elements that appear more than once

### ✅ Expected Output:
[2, 3]

### 💡 Hint:
- Use `reduce()` to count frequency
- Filter elements where count > 1

---

## 🚀 Problem 5: Longest Word in Sentence

```js
const sentence = "I love programming and solving problems";
```

### 🎯 Task:
- Find the longest word in the sentence

### ✅ Expected Output:
"programming"

### 💡 Hint:
- Convert string → array using `split()`
- Use `reduce()` to compare word lengths

---

# 🧠 Learning Goals

After solving these problems, you will be able to:

- Use `reduce()` for grouping data
- Perform frequency analysis
- Find max/min values
- Transform arrays into objects
- Solve real-world coding problems

---

# ⚡ Pro Tip

If you understand these patterns, you can solve most reduce-based interview problems.

---

# 💻 Happy Coding 🚀
