const express = require("express");
const dbConnect = require("./db/db.config");
const cors = require("cors");
const StudentInfoRouter = require("./routes/studentinfo.routes");
const StudentAcademicInfoRouter = require("./routes/studentacademicinfo.routes");
const { AllStudentInfoRouter } = require("./routes/studentinfos.routes");
const userRouter = require("./routes/user.routes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/studentinfo", StudentInfoRouter);
app.use("/studentacademicinfo", StudentAcademicInfoRouter);
app.use("/allstudentinfos", AllStudentInfoRouter);

try {
  dbConnect();
  app.listen(PORT, () =>
    console.log(`Server started at http://localhost:${PORT}`)
  );
} catch (error) {
  console.error(error);
}
