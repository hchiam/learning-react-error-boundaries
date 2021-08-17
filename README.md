# Learning [React](https://github.com/hchiam/learning-reactjs) Error Boundaries

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Error boundaries are like `catch` blocks but for components. Handle errors in a component's _children_ (render/lifecycle/(sub-)constructors) gracefully so they don't bring down the whole app or give you cryptic errors on next renders, so the rest of the app can stay interactive, and you can show a fallback component inside the error boundary.

Use `static getDerivedStateFromError(error) {}` to turn the class component into an error boundary with the ability to render a fallback component.

And/or:

Use `componentDidCatch(error, errorInfo) {}` to turn the class component into an error boundary with the ability to log error info.

```jsx
<CustomErrorBoundary FallbackComponent={CharacterFallback}>
  <ComponentWhereErrorMightOccur />
</CustomErrorBoundary>
```

Alternatively, there's also [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) that provides a pre-built `<ErrorBoundary/>` or a `useErrorHandler` hook:

```jsx
const handleError = useErrorHandler();
const result = fetch(url).then(
  (response) => response.json(),
  (error) => handleError(error)
);
```

_**Note:**_ error boundaries don't catch errors in event handlers (just use `catch`), asynchronous code (like `setTimeout` or `requestAnimationFrame`), SSR, or errors thrown in the error boundary itself (like a `catch` block too). By default as of React 16, errors not caught in any error boundary will break the whole app, to prevent users from performing unintended actions. So use error boundaries to insulate potential sources of errors from the rest of the app. Also, you have to use a class component to make an error boundary (not a functional component).

## References

<https://reactjs.org/docs/error-boundaries.html>

<https://codepen.io/hchiam/pen/NWjVjXR?editors=0010>

### References for `yarn add react-error-boundary`

<https://blog.logrocket.com/error-handling-react-error-boundary>

<https://github.com/bvaughn/react-error-boundary>

## Example in this repo

```bash
yarn
yarn dev
```
