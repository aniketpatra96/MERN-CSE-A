import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Person from "./components/Person";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "./layouts/Layout";
import Toggle from "./components/Toggle";
import UserGreeting from "./components/UserGreeting";
import Users from "./pages/Users";
import Four from "./pages/Four";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/one", element: <Person name={"John"} age={25} /> },
        { path: "/two", element: <Toggle /> },
        { path: "/three", element: <UserGreeting /> },
        { path: "/four", element: <Four /> },
        { path: "/five", element: <Users /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
