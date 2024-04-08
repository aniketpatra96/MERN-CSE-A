import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./style.css"
import UserCard  from "./components/UserCard"
import EventDemo from "./components/EventDemo"
import ApiDemo from "./components/ApiDemo"
import FormDemo from "./components/FormDemo"
import Users from "./components/Users"
import Layout from "./components/Layout"

function App(){
  
  // const router = createBrowserRouter([
  //   { path: "/", element: <Users /> },
  //   { path: "/event", element: <EventDemo name="1st" /> },
  //   { path: "/api", element: <ApiDemo /> },
  //   { path: "/calculator", element: <FormDemo /> },
  // ])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
          { path: "/", element: <Users /> },
          { path: "/event", element: <EventDemo name="1st" /> },
          { path: "/api", element: <ApiDemo /> },
          { path: "/calculator", element: <FormDemo /> },
      ]
    }
  ])
  
  return <RouterProvider router={router} />

  // return (
  //   <> 

  //     {/* <Users />
  //     <EventDemo name="1st" />
  //     <EventDemo name="2nd" />
  //     <ApiDemo /> 
  //     <FormDemo /> */}
  //   </>
  // )
}



export default App