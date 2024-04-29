import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import interviewService from '../apiservice/InterviewService'
import questionService from '../apiservice/QuestionService'

const InterviewDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ interview, setInterview ] = useState(null)

    const getInterviewDetails = async(id) => {
        const res = await interviewService.interviewDetails(id)
        if(res.status){
            setInterview(res.data)
        }
    }
    useEffect(()=>{
        getInterviewDetails(id)
    }, [id])

    if(!interview) return

    const deleteInterview = async(e) => {
        e.preventDefault();

        let questionRes = {status: true};
        if(interview.questions.length > 0){
            questionRes = await questionService.deleteQuestion(interview.questions[0]._id)
        }
        if(!questionRes.status){
            return;
        }

        let interviewRes = await interviewService.deleteInterview(id)

        if(questionRes.status && interviewRes.status){
            navigate("/")
        }
    }
  return (
    <div>
      <h3>{interview.companyName} - {interview.role}</h3>
      <p className='text-muted'>{new Date(interview.interviewDate).toLocaleDateString()} {interview.place}</p>
      <p className='lead'>{interview.broadArea.join(", ")}</p>
      <h4>Questions</h4>
      {/* {interview?.questions[0]?.questions} */}
      {
        interview.questions.length>0 ? (
            parse(interview?.questions[0]?.questions)
        ) : (
            <Link to={`/addquestion/${interview._id}`}>Add Questions</Link>
        )
        }
        <div className="text-end">
            <Link to={`/updateinterview/${interview._id}`} className='btn btn-sm btn-info m-1'>Update</Link>
            <Link to="/" onClick={deleteInterview} className='btn btn-sm btn-danger m-1'>Delete</Link>
        </div>
    </div>
  )
}

export default InterviewDetails
