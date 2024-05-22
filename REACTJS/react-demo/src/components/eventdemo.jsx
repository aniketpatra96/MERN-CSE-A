import { useState } from "react";

export default function EventDemo() {
  const [count, setCount] = useState(0);
  function clickFunction() {
    setCount((count) => count + 1);
    console.log(`button is clicked ${count} times`);
  }
  function greet(name) {
    console.log("Hello " + name);
  }
  function callGreet() {
    greet("John");
  }
  const [show, setShow] = useState(true);
  // console.log("Component Rendered");
  return (
    <>
      {show && (
        <center>
          <h1>Button clicked {count} times</h1>
        </center>
      )}
      <button onClick={clickFunction}>Click</button>
      <button onClick={callGreet}>Click</button>
      <button onClick={() => greet("Smith")}>Click</button>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
    </>
  );
}
