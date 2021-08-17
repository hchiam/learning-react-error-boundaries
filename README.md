# Learning [React](https://github.com/hchiam/learning-reactjs) Error Boundaries [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-template/blob/main/LICENSE)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Error boundaries are like `catch` blocks but for components. Handle errors in a component's _children_ (render/lifecycle/(sub-)constructors) gracefully so they don't bring down the whole app or give you cryptic errors on next renders, so the rest of the app can stay interactive, and you can show a fallback component inside the error boundary.

Note: error boundaries don't catch errors in event handlers, asynchronous code (setTimeout or requestAnimationFrame), SSR, or errors thrown in the error boundary itself (like a `catch` block too). By default as of React 16, errors not caught in any error boundary will break the whole app, to prevent users from performing unintended actions. So use error boundaries to insulate potential sources of errors from the rest of the app.

`static getDerivedStateFromError(error) {}`

`componentDidCatch(error, errorInfo) {}`

```jsx
<ErrorBoundary FallbackComponent={CharacterFallback}>
  <ComponentWhereErrorMightOccur />
</ErrorBoundary>
```

Alternatively, there's also a `useErrorHandler` hook:

```jsx
const handleError = useErrorHandler();
const result = fetch(url).then(
  (response) => response.json(),
  (error) => handleError(error)
);
```

## References

<https://reactjs.org/docs/error-boundaries.html>

<https://blog.logrocket.com/error-handling-react-error-boundary>
