import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import interviewService from '../apiservice/InterviewService'

const InterviewDetails = () => {
    const { id } = useParams()
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

  return (
    <div>
      <h3>{interview.companyName} - {interview.role}</h3>
      <p className='text-muted'>{new Date(interview.interviewDate).toLocaleDateString()} {interview.place}</p>
      <p className='lead'>{interview.broadArea.join(", ")}</p>
      <h4>Questions</h4>
      {/* {interview?.questions[0]?.questions} */}
      {
        interview.questions.length>0 ? (
            interview?.questions[0]?.questions
        ) : (
            <Link to="">Add Questions</Link>
        )
        }
        <div className="text-end">
            <Link to="/" className='btn btn-sm btn-info m-1'>Update</Link>
            <Link to="/" className='btn btn-sm btn-danger m-1'>Delete</Link>
        </div>
    </div>
  )
}

export default InterviewDetails
