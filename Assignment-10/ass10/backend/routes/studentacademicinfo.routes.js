const express = require("express");
const {
  addAllStudentAcademicInfos,
  addStudentAcademicRecord,
  getAllStudentAcademicInfos,
  getStudentAcademicRecordByRoll,
  updateStudentAcademicRecordByRoll,
  deleteStudentAcademicRecordByRoll,
} = require("../controllers/studentacademicinfo.controller");
const authenticateUser = require("../middlewares/auth.middleware");

const StudentAcademicInfoRouter = express.Router();

StudentAcademicInfoRouter.post(
  "/",
  authenticateUser,
  addAllStudentAcademicInfos
);
StudentAcademicInfoRouter.post(
  "/addacademicrecord",
  authenticateUser,
  addStudentAcademicRecord
);
StudentAcademicInfoRouter.get("/", getAllStudentAcademicInfos);
StudentAcademicInfoRouter.get("/:id", getStudentAcademicRecordByRoll);
StudentAcademicInfoRouter.put(
  "/:id",
  authenticateUser,
  updateStudentAcademicRecordByRoll
);
StudentAcademicInfoRouter.delete(
  "/:id",
  authenticateUser,
  deleteStudentAcademicRecordByRoll
);

module.exports = StudentAcademicInfoRouter;
