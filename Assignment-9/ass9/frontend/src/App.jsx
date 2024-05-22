import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import AddStudentDetails from "./pages/AddStudentDetails";
import UpdateStudentDetails from "./pages/UpdateStudentDetails";
import DeleteStudentDetails from "./pages/DeleteStudentDetails";
import UpdateStudent from "./pages/UpdateStudent";
import SearchStudentDetails from "./pages/SearchStudentDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/studentdetails", element: <StudentDetails /> },
        { path: "/addstudentdetails", element: <AddStudentDetails /> },
        {
          path: "/updatestudentdetails",
          element: <UpdateStudentDetails />,
        },
        {
          path: "/updatestudent/:id",
          element: <UpdateStudent />,
        },
        {
          path: "/deletestudentdetails",
          element: <DeleteStudentDetails />,
        },
        {
          path: "/searchstudentdetails",
          element: <SearchStudentDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
