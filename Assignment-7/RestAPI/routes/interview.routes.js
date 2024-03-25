const express = require("express")

const { 
    getAllInterviews,
    addInterview,
    getInterviewById,
    updateInterview,
    deleteInterview
 } = require("../controllers/interview.controller")

const interviewRouter = express.Router();

interviewRouter.get("/interview", getAllInterviews)
interviewRouter.post("/interview", addInterview)
interviewRouter.get("/interview/:id", getInterviewById)
interviewRouter.put("/interview/:id", updateInterview)
interviewRouter.delete("/interview/:id", deleteInterview)

module.exports = interviewRouter