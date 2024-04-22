import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import AddInterview from './pages/AddInteview'
import InterviewDetails from "./pages/InterviewDetails"

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />},
      { path: "/addinterview", element: <AddInterview />},
      { path: "/interviewdetails/:id", element: <InterviewDetails />},
    ]
  }
 ])

  return <RouterProvider router={router} />
}

export default App
