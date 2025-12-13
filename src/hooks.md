
1. State Hooks
- *`useState`*: Adds state to functional components.
- *`useReducer`*: Alternative to `useState` for complex state logic.

2. Effect Hooks
- *`useEffect`*: Handles side effects (e.g., API calls, DOM manipulation).
- *`useLayoutEffect`*: Similar to `useEffect`, but fires synchronously after DOM updates.

3. Context Hooks
- *`useContext`*: Accesses context (shared state) in functional components.

4. Ref Hooks
- *`useRef`*: Creates a reference to a DOM node or a value.
- *`useImperativeHandle`*: Customizes the instance value exposed to parent components.

5. Performance Hooks
- *`useMemo`*: Memoizes (caches) values to prevent unnecessary recalculations.
- *`useCallback`*: Memoizes functions to prevent unnecessary re-renders.

6. Other Hooks
- *`useDebugValue`*: Displays a label for custom hooks in React DevTools.

Here's a brief example of each:
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react';

// 1. State Hooks
const [count, setCount] = useState(0);
const [state, dispatch] = useReducer(reducer, initialState);

// 2. Effect Hooks
useEffect(() => {
  // side effect code
}, [dependencies]);

useLayoutEffect(() => {
  // synchronous effect code
}, [dependencies]);

// 3. Context Hooks
const theme = useContext(ThemeContext);

// 4. Ref Hooks
const inputRef = useRef(null);
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
});

// 5. Performance Hooks
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);

// 6. Other Hooks
useDebugValue('Custom Hook Label');