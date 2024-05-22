import { useState } from "react";

export default function UserGreeting() {
  const [status, setStatus] = useState("logout");
  const handleChange = () => {
    if (status === "login") {
      return setStatus("logout");
    } else {
      return setStatus("login");
    }
  };
  return (
    <div>
      <center>
        <h1>{status === "login" ? "Welcome back!" : "Please Log in !"}</h1>
        <button className="btn btn-primary" onClick={handleChange}>{status === "login" ? "Log Out" : "Log In"}</button>
      </center>
    </div>
  );
}
