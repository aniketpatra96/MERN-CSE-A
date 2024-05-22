import { useState } from "react";
import "../styles/toggle.css";

export default function Toggle() {
  const [toggle,setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <center>
        {toggle && <h1 className="mystyle">Hello, from Aniket!! Hope u have a nice day</h1>}
        <button onClick={handleToggle} className="btn btn-success">
          Toggle
        </button>
      </center>
    </div>
  );
}
