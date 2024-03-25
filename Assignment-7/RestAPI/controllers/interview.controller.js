const InterviewModel = require('../models/interview.model')
const getAllInterviews = (req, res)=>{
    const data = [
        {id: 1, company: "xyz"},
        {id: 2, company: "abc"},
        {id: 3, company: "def"},
    ]
    res.json(data)
}

const addInterview = async (req, res)=>{
    // const data = req.body
    // console.log(data);
    try {
        let response = await InterviewModel.create(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getInterviewById = (req, res)=>{
    // const data = req.params
    const { id } = req.params
    console.log(id);
    res.json({"message": `Data of id ${id}`})
}

const updateInterview = (req, res)=>{
    const data = req.body
    const { id } = req.params
    console.log(id);
    console.log(data);
    res.status(200).json({"message": `Update request for id ${id}`})
}

const deleteInterview = (req, res)=>{
    const { id } = req.params
    console.log(id);
    res.status(200).json({"message": `Delete request for id ${id}`})
}

module.exports = {
    getAllInterviews,
    addInterview,
    getInterviewById,
    updateInterview,
    deleteInterview
}