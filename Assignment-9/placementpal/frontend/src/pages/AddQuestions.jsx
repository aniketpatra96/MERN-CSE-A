import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import interviewService from '../apiservice/InterviewService';
import questionService from '../apiservice/QuestionService';

const AddQuestions = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const questionRef = useRef()
    const [ interview, setInterview ] = useState(null);
    const [ message, setMessage ] = useState("")

    const getInterviewDetails = async(id) =>{ 
        const res = await interviewService.interviewDetails(id)
        console.log(res.data);
        setInterview(res.data)
    }

    useEffect(() => {
      getInterviewDetails(id)
    }, [id])
    
    if(!interview) return;

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const question = {
            interviewId: id,
            questions: questionRef.current.value
        }
        console.log(question);
        const res = await questionService.addQuestion(question)
        if(res.status){
            navigate(`/interviewdetails/${id}`)
        } else {
            setMessage("Error while adding the question")
        }
    }

  return (
    <div className='row'>
        <div className="col-md-8 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h2>Add Questions for {interview.companyName} - {interview.role} Interview</h2>
                    <p>{message}</p>
                </div>
                <div className="card-body">
                    <form action="" method="post" onSubmit={handleSubmit}> 
                        <div className="mb-1">
                            <ReactQuill ref={questionRef} theme="snow" style={{ width: "100%", height: "300px", display: "inline-block"}}/>
                        </div>
                        <div className="my-1">
                            <input type='submit' value="ADD" className='btn btn-primary w-100' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQuestions