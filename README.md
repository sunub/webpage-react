# <div style="color:blue">What I studied about React</div>

---

## Features

### What are Effects and how are they different fromm events?

1. Rendering code
   Rendering code lives at the top level of our component. This is where you take the props and state, transform them, and return the JSX yout want to see on screen.
   <strong>Rendering code must be pure.</strong>

2. Event Handler
   Event Handler are nested function inside your components that do things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event Handler contain "side effects" and are caused by a specific user action.

### Pitfall

By default, Effects run after every render. This is why code like this will produce and infinite loop

---

## Hook

### useEffect

useEffect() is execute When somthing happens depening on which parts of the state changed.

<strong>Ideal Use</strong>

```javascript
useEffect(() => {
  doSomething();

  return () => cleanup();
}, [whenThisChanges]);
```

useEffect is powerfull, but it has weakness that make it difficult to understand where do action effects goes.

### When We don't need to use useEffect()

1 .You don't need to use useEffect for communicating with parents

useEffect() => eventHandler()

```javascript
function UseEffect({ onOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, isOpen);

  return something;
}

function betterPattern({ onOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleView() {
    const nextIsOpen = !isOpen;
    setIsOpen(!isOpen);
    if (nextIsOpen) {
      onOpen();
    } else {
      onClose();
    }
  }

  return (
    <div>
      <button onClick={toggleView}>Toggle quick view</button>
    </div>
  );
}
```
