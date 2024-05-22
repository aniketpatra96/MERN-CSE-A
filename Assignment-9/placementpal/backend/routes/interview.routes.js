const express = require("express");

const {
  getAllInterviews,
  addInterview,
  getInterviewById,
  updateInterview,
  deleteInterview,
  getInterviewDetails,
} = require("../controllers/interview.controller");
const { logger } = require("../middlewares/logging.middleware");

const interviewRouter = express.Router();

// interviewRouter.use(logger);

// interviewRouter.get("/", logger, getAllInterviews);
interviewRouter.get("/", getAllInterviews);
interviewRouter.post("/", addInterview);
// interviewRouter.post("/", logger, addInterview);
interviewRouter.get("/:id", getInterviewById);
interviewRouter.put("/:id", updateInterview);
interviewRouter.delete("/:id", deleteInterview);
interviewRouter.get("/details/:id", getInterviewDetails);

module.exports = interviewRouter;
