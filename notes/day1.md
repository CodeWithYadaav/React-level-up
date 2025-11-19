# Day 1 — React Mastery Journey

**Date:** 19 Nov 2025  
**Focus:** Getting Started with React + Building a Simple Counter

---

## 🚀 What I Did Today

### 1. **Created a New React App**
- Used **Vite** to set up the project (fast + minimal).
- Removed all unnecessary boilerplate files to keep the structure clean.
- Project now contains only:
  - `main.jsx`
  - `App.jsx`

This helps me focus on React fundamentals without distractions.

---

## 🧠 Concepts Learned / Revised

### ✓ JSX Basics  
Understanding how JSX blends JavaScript with HTML-like syntax.

### ✓ Component Basics  
Created a simple functional component `App`.

### ✓ useState Hook  
Used `useState` to store and update the counter value.

---

## 🏗️ What I Built — **Counter Component**

- A counter with:
  - Increment button ➕
  - Decrement button ➖
  - Reset button 🔄

This helped me understand:
- State management in functional components  
- Re-rendering behavior  
- Event handling in React

---

## 📦 Code Snapshot (Minimal Setup)

```jsx
// App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
