import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import AddInterview from './pages/AddInteview'
import InterviewDetails from "./pages/InterviewDetails"
import AddQuestions from "./pages/AddQuestions"
import UpdateInterview from "./pages/UpdateInterview"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />},
      { path: "/addinterview", element: <AddInterview />},
      { path: "/addquestion/:id", element: <AddQuestions />},
      { path: "/interviewdetails/:id", element: <InterviewDetails />},
      { path: "/updateinterview/:id", element: <UpdateInterview />},
      { path: "/signup", element: <SignUp />},
      { path: "/signin", element: <SignIn />},
    ]
  }
 ])

  return <RouterProvider router={router} />
}

export default App
