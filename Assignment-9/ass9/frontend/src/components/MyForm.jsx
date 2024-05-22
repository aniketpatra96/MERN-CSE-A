/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import studentService from "../service/StudentService";
function MyForm({ type = "Add", data = {} }) {
  const initialFormData = {
    rollno: data?.rollno,
    name: data?.name,
    email: data?.email,
    mobile: data?.mobile,
    city: data?.city,
    state: data?.state,
    pin: data?.pin,
    program: data?.program,
    branch: data?.branch,
    cgpa: data?.cgpa,
  };
  const DummyData = {
    rollno: "",
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    pin: "",
    program: "",
    branch: "",
    cgpa: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [Data, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, [Data]);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const studentdetails = {
    name: formData.name,
    rollno: parseInt(formData.rollno),
    mobile: formData.mobile,
    email: formData.email,
    address: {
      city: formData.city,
      state: formData.state,
      pin: formData.pin,
    },
    studentDetails: [
      {
        rollno: parseInt(formData.rollno),
        program: formData.program,
        branch: formData.branch,
        cgpa: formData.cgpa,
      },
    ],
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type.toLowerCase() === "update") {
      const updatedData = {
        studentDetails: [
          {
            rollno: formData.rollno,
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            address: {
              city: formData.city,
              state: formData.state,
              pin: formData.pin,
            },
          },
        ],
        studentAcademicDetails: [
          {
            rollno: formData.rollno,
            program: formData.program,
            branch: formData.branch,
            cgpa: formData.cgpa,
          },
        ],
      };
      await studentService.updateStudentDetailsByRoll(
        updatedData,
        formData.rollno
      );
      setOpen(true);
      setSuccess(true);
      return;
    }
    const res = await studentService.addStudentDetails(studentdetails);
    if (res.status) {
      setFormData(DummyData);
      setOpen(true);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
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
            ? type.toLowerCase() === "update"
              ? "Successfully Updated the Student Details!!"
              : "Successfully Added the Student Setails!!"
            : type.toLowerCase() === "update"
            ? "Error in Updating Student Details!!"
            : "Error in Adding the Student Details!!"}
        </Alert>
      </Snackbar>
      <Typography variant="h6" gutterBottom>
        {type} Student Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="rollno"
              label="Roll No"
              variant="outlined"
              fullWidth
              value={formData.rollno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mobile"
              label="Mobile No"
              variant="outlined"
              fullWidth
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="program"
              label="Program"
              variant="outlined"
              fullWidth
              value={formData.program}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="branch"
              label="Branch"
              variant="outlined"
              fullWidth
              value={formData.branch}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="cgpa"
              label="CGPA"
              variant="outlined"
              fullWidth
              value={formData.cgpa}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="state"
              label="State"
              variant="outlined"
              fullWidth
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="pin"
              label="Pin Code"
              variant="outlined"
              fullWidth
              value={formData.pin}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: 20,
          }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default MyForm;
