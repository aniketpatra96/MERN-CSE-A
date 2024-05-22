/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import studentService from "../service/StudentService";
import { useOnlineStatus } from "../hooks/OnlineStatus";
import { Snackbar, Alert } from "@mui/material";
const columns = [
  { field: "rollno", headerName: "Roll No", type: "number", width: 90 },
  {
    field: "name",
    headerName: "Student Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "mobile",
    headerName: "Mobile No.",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
  {
    field: "program",
    headerName: "Program",
    width: 150,
  },
  {
    field: "branch",
    headerName: "Branch",
    width: 310,
  },
  {
    field: "cgpa",
    headerName: "CGPA",
    width: 100,
  },
];

const StudentDetails = () => {
  const [rows, setRows] = useState([]);
  const isOnline = useOnlineStatus();
  const fetchData = async () => {
    const res = await studentService.getStudentDetails();
    if (res.status) {
      const students = res.data;
      setRows(
        students.map((student) => {
          return {
            rollno: student.rollno,
            name: student.name,
            email: student.email,
            mobile: student.mobile,
            address: `${student.address.state}, ${student.address.city} PIN - ${student.address.pin}`,
            program: student.studentDetails[0].program,
            branch: student.studentDetails[0].branch,
            cgpa: student.studentDetails[0].cgpa,
          };
        })
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, [rows]);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleLoad = () => {
    setOpen(true);
    isOnline ? setSuccess(true) : setSuccess(false);
  };
  useEffect(() => {
    handleLoad();
  }, [isOnline]);
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {success
            ? "Online"
            : "You are Offline!! Please Connect to Internet!!"}
        </Alert>
      </Snackbar>
      <StudentDataGrid rows={rows} />
    </div>
  );
};

function StudentDataGrid({ rows = [] }) {
  const generateRowId = () => {
    let id = 0;
    return () => {
      id += 1;
      return id;
    };
  };
  const generateId = generateRowId();
  const rowsWithIds = rows.map((row) => ({ ...row, id: generateId() }));
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsWithIds}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default StudentDetails;
