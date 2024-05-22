import { useRef, useState } from "react";

export default function FormDemo() {
  const numOne = useRef(null);
  const numTwo = useRef(null);
  const [sum, setSum] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const a = Number(numOne.current.value);
    const b = Number(numTwo.current.value);
    setSum(a + b);
  }
  return (
    <div className="row my-3">
      <div className="col-md-6 mx-auto">
        <h1 className="text-center">Calculator</h1>
        <form
          className="text-center"
          action=""
          method="post"
          onSubmit={handleSubmit}
        >
          <input type="text" ref={numOne} placeholder="Number 1" />
          <br />
          <br />
          <input type="text" ref={numTwo} placeholder="Number 2" />
          <br />
          <br />
          <input className="btn btn-primary" type="submit" value={"Click"} />
        </form>
      </div>
      <center>{sum !== null && <h1>Sum is {sum}</h1>}</center>
    </div>
  );
}
