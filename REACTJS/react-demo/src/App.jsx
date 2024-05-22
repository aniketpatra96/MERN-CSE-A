import { useState } from "react";
import "./App.css";
import Employee from "./components/employee";
import EventDemo from "./components/eventdemo";
import ApiDemo from "./components/ApiDemo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FormDemo from "./components/FormDemo";
const customcss = {
  color: "blue",
  backgroundColor: "red",
};
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Layout from "./components/layout";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <ApiDemo /> },
        { path: "/event", element: <EventDemo /> },
        { path: "/calculator", element: <FormDemo /> },
      ],
    },
  ]);

  const [count, setCount] = useState(0);
  const [name, updateName] = useState("");
  const employees = [
    { name: "John", email: "john23@hotmail.com", phone: "8907864531" },
    { name: "Smith", email: "smith45@gmail.com", phone: "1234907812" },
    { name: "Samar", email: "Samar90@yahoo.com", phone: "5784912318" },
  ];
  const setName = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    updateName(data.name);
  };
  const header = <h6>Hello World!</h6>;
  //console.log(header); // html converted into object in the memory
  //virtual dom is the object representation of actual dom in memory
  //reactFiber algorithm (Reconsilation)
  // return (
  // Fragment Tags
  <>
    <h1 style={customcss}>Hello from React App</h1>
    <br />
    <h2>My name is {name}</h2>
    <p className="counter">Clicked {count} times</p>
    <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    {header}
    <form onSubmit={setName}>
      <label htmlFor="name">Enter your name</label> <br />
      <input type="text" name="name" id="name" /> <br />
      <button>Add Name</button>
    </form>
    {employees.map((emp, index) => {
      return <Employee key={index} user={emp} />;
    })}
  </>;
  // );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
