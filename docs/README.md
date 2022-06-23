# 📝 Documentation

## 💡 Index

- [useToggle](https://github.com/react-tool/hooks/tree/main/docs#usetoggle)
- [useInput](https://github.com/react-tool/hooks/tree/main/docs#useinput)
- [useForm](https://github.com/react-tool/hooks/tree/main/docs#useform)
- [useOutsideClick](https://github.com/react-tool/hooks/tree/main/docs#useoutsideclick)
- [useFullScreen](https://github.com/react-tool/hooks/tree/main/docs#usefullscreen)
- [useDragScroll](https://github.com/react-tool/hooks/tree/main/docs#usedragscroll)
- [useWindowEventListener](https://github.com/react-tool/hooks/tree/main/docs#usewindoweventlistener)
- [useTitle](https://github.com/react-tool/hooks/tree/main/docs#useTitle)

<br />

## useToggle

### Usage

```jsx
import React from "react";
import { useToggle } from "@react-tool/hooks";

function App() {
  const [istoggle, onToggle] = useToggle(false);

  return (
    <>
      <button onClick={onToggle}>Toggle</button>
      {istoggle ? <p>Hello</p> : <p>Bye</p>}
    </>
  );
}

export default App;
```

### Parameters

- `initialValue` (boolean) : The initial value of the toggle state.
  - default initialValue is `false`

### Return value

`[value, onToggle, setValue]`

- `value` (boolean) : The current value of the toggle state.
- `onToggle` (function) : A function to toggle the value of the toggle state.
- `setValue` (function) : A function to set the value of the toggle state.

<br />

## useInput

### Usage

```jsx
import React from "react";
import { useInput } from "@react-tool/hooks";

function App() {
  const [value, onChange] = useInput("");

  return (
    <>
      <input value={value} onChange={onChange} />
      <p>{value}</p>
    </>
  );
}
export default App;
```

### Parameters

- `initialValue` (string) : The initial value of the input or textarea state.

### Return value

`[value, onChange, setValue]`

- `value` (string) : The current value of the input or textarea state.
- `onChange` (function) : A function to change the value of the input or textarea state.
- `setValue` (function) : A function to set the value of the input or textarea state.

<br />

## useForm

### Usage

```jsx
import React from "react";
import { useForm } from "@react-tool/hooks";

function App() {
  const { form, onChangeForm, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <input value={form.name} onChange={onChangeForm} name="name" />
      <input value={form.email} onChange={onChangeForm} name="email" />
      <input value={form.password} onChange={onChangeForm} name="password" />
      <button onClick={onResetForm}>Reset</button>
    </>
  );
}

export default App;
```

### Parameters

- `initialForm` (object) : The initial value of the form state.

### Return value

`[form, onChangeForm, onResetForm]`

- `form` (object) : The current value of the form state.
- `onChangeForm` (function) : A function to change the value of the form state.
- `onResetForm` (function) : A function to reset the value of the form state.

<br />

## useOutsideClick

### Usage

```jsx
import React from "react";
import { useOutsideClick, useToggle } from "@react-tool/hooks";

function App() {
  const [isOpen, onToggle] = useToggle(false);

  const ref = useOutsideClick(isOpen, onToggle);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        Toggle
      </button>

      {isOpen && (
        <div ref={ref}>
          <p>Hello</p>
        </div>
      )}
    </>
  );
}

export default App;
```

### Parameters

- `isOpen` (boolean) : The initial value of the toggle state.
- `onToggle` (function) : A function to toggle the value of the toggle state.

### Return value

- `ref` (function) : A function to set the ref of the element.

<br />

## useFullScreen

### Usage

```jsx
import React from "react";
import { useFullScreen } from "@react-tool/hooks";

function App() {
  const { screenRef, onToggleFullScreen } = useFullScreen();

  return (
    <div ref={screenRef} onDoubleClick={onToggleFullScreen}>
      Screen
    </div>
  );
}

export default App;
```

### Return value

`{screenRef, onToggleFullScreen}`

- `screenRef` (RefObject) : A function to set the ref of the element.
- `onToggleFullScreen` (function) : A function to toggle the full screen.

<br />

## useDragScroll

### Usage

```jsx
import React from "react";
import { useDragScroll } from "@react-tool/hooks";

function App() {
  const { onDragStart, onDragMove, onDragEnd, scrollRef } = useDragScroll();

  return (
    <div
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
    >
      {/*
        list..
      */}
    </div>
  );
}

export default App;
```

### Return value

`{onDragStart, onDragMove, onDragEnd, scrollRef}`

- `onDragStart` (function) : A function to start the drag.
- `onDragMove` (function) : A function to move the drag.
- `onDragEnd` (function) : A function to end the drag.
- `scrollRef` (RefObject) : A function to set the ref of the element.

<br />

## useWindowEventListener

### Usage

```jsx
import React from "react";
import { useWindowEventListener } from "@react-tool/hooks";

function App() {
  const onPrint = () => {
    console.log("print");
  };

  useWindowEventListener("click", onPrint);

  return <p>Hello</p>;
}

export default App;
```

### Parameters

- `event` (keyof WindowEventMap) : The name of the event.
- `handler` (function) : A function to handle the event.

<br />

## useTitle

### Usage

```jsx
import React from "react";
import { useTitle } from "@react-tool/hooks";

function App() {
  useTitle("Login Page")

  return <p>Login</p>;
}

export default App;

```

### Parameters

- `title` (string) : The name of the page.

<br />