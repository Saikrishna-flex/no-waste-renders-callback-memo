# 🧠 no-waste-renders-callback-memo

A real-world React project demonstrating how to **optimize re-renders** using:

- `React.memo`
- `useMemo`
- `useCallback`

This mini e-commerce-style app showcases how to prevent unnecessary re-renders in components and handle expensive computations efficiently — a must-know for performance-focused React development.

1. React.memo
What it is: A higher-order component that memoizes a functional component, preventing re-renders if props haven't changed.

Why we need it: To avoid expensive re-renders of components when their parent re-renders but their props remain the same.

When to use:

Pure functional components (same props → same output)

Components that render often with the same props

Components that are expensive to render

Example:

const UserProfile = React.memo(({ user }) => {
  console.log('Rendering UserProfile');
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
});

// Parent component
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <UserProfile user={{ name: 'John Doe', email: 'john@example.com' }} />
    </div>
  );
}

2. useMemo
What it is: A hook that memoizes the result of a computation, only recalculating when dependencies change.

Why we need it: To avoid expensive calculations on every render when dependencies haven't changed.

When to use:

Heavy computations

Derived data that's used in multiple places

When passing calculated values to child components

Example:

function ProductList({ products, filterTerm }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product => 
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }, [products, filterTerm]);

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

3. useCallback
What it is: A hook that memoizes a function, preserving its identity between renders unless dependencies change.

Why we need it: To prevent unnecessary re-renders of child components that depend on function reference equality.

When to use:

When passing callbacks to optimized child components (wrapped in React.memo)

When functions are dependencies in other hooks (useEffect, useMemo)

In contexts where function identity matters

Example:

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // No dependencies = never changes

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

---

## 🔍 What This Project Teaches

✅ How to prevent **unnecessary child re-renders** using `React.memo`  
✅ How to **memoize expensive computations** using `useMemo`  
✅ How to **stabilize callback references** using `useCallback`  
✅ How to observe rendering behavior through deliberate logging  
✅ How to build a performant component architecture

---

## 🛒 App Overview

- `App.jsx`: Holds the state and business logic for cart toggling and filtering.
- `ProductList.jsx`: Lists products passed down from App.
- `ProductItem.jsx`: Memoized component that renders individual products.

---

## 📁 Project Structure

├── components/
│ ├── ProductList.jsx
│ ├── ProductItem.jsx
│ └── ProductsData.js
├── App.jsx
├── App.css
├── vite.config.js
└── index.html

## ⚙️ How to Run Locally

**Clone the repo**

   git clone https://github.com/saikrishna-flex/no-waste-renders-callback-memo.git
   cd no-waste-renders-callback-memo
   npm install
   npm run dev

🌐 Live Demo
Deployed using GitHub Pages:
👉 https://saikrishna-flex.github.io/no-waste-renders-callback-memo/


🤔 Why This Matters
Performance bottlenecks in React apps often come from uncontrolled re-renders. This project demonstrates:
Real-life situations where memoization adds value
How memoization reduces computation and visual lag
When memoization is not necessary (e.g. cheap renders)


🧠 What You’ll Learn
Why React re-renders child components
How React.memo() compares shallow props
How useCallback() prevents prop identity changes
How useMemo() caches results to avoid recomputation


📘 Concepts Covered
Concept	Applied In
React.memo	ProductItem.jsx
useCallback	App.jsx - handleAddToCart()
useMemo	App.jsx - filteredProducts logic


👨‍💻 Author
Marri Sai krishna