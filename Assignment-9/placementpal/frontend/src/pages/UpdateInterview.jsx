import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import interviewService from '../apiservice/InterviewService'
import questionService from '../apiservice/QuestionService'
import { FormatDate } from '../utils/HelperFunctions'

const UpdateInterview = () => {
    const { id } = useParams()

    const companyNameRef = useRef()
    const interviewDateRef = useRef()
    const placeRef = useRef()
    const roleRef = useRef()
    const broadAreaRef = useRef()
    const isFresherRef = useRef()
    const questionRef = useRef()

    const [interview, setInterview] = useState(null)

    const [message, setMessage] = useState('')

    const getInterviewDetails = async (id) => {
        const res = await interviewService.interviewDetails(id)
        console.log(res.data)
        setInterview(res.data)
    }

    useEffect(() => {
        getInterviewDetails(id)
    }, [id])

    if (!interview) return

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedInterview = {
            companyName: companyNameRef.current.value,
            interviewDate: interviewDateRef.current.value,
            place: placeRef.current.value,
            role: roleRef.current.value,
            broadArea: broadAreaRef.current.value.split(','),
            isFresher: isFresherRef.current.checked,
        }
        const updatedQuestion = {
            interviewId: id,
            questions: questionRef.current.value
        }
        console.log(updatedInterview)
        const interviewRes = await interviewService.updateInterview(id, updatedInterview)
        
        let questionRes;
        if(interview.questions.length > 0){
            questionRes = await questionService.updateQuestion(interview.questions[0]._id, updatedQuestion)
        } else {
            questionRes = await questionService.addQuestion(updatedQuestion)
        }

        if(interviewRes.status && questionRes.status){
            setMessage("Interview Updated")
        } else {
            setMessage("Error while updating")
        }
    }
    return (
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Add Interview</h3>
                        <p>{message}</p>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <input
                                    ref={companyNameRef}
                                    type="text"
                                    placeholder="Company Name"
                                    className="form-control"
                                    defaultValue={interview.companyName}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={interviewDateRef}
                                    type="date"
                                    className="form-control"
                                    defaultValue={FormatDate(
                                        interview.interviewDate
                                    )}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={placeRef}
                                    type="text"
                                    placeholder="Interview Location"
                                    className="form-control"
                                    defaultValue={interview.place}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={roleRef}
                                    type="text"
                                    placeholder="Position"
                                    className="form-control"
                                    defaultValue={interview.role}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={broadAreaRef}
                                    type="text"
                                    placeholder="Broad areas like OOP, DS, HTML, CSS"
                                    className="form-control"
                                    defaultValue={interview.broadArea.join(
                                        ', '
                                    )}
                                    required
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="">Is it for freshers?</label>
                                <input
                                    ref={isFresherRef}
                                    type="checkbox"
                                    className="ms-3"
                                    defaultChecked={interview.isFresher}
                                />
                            </div>
                            <div className="mb-1">
                                <ReactQuill
                                    ref={questionRef}
                                    defaultValue={
                                        interview?.questions[0]?.questions
                                    }
                                    placeholder='Add Questions'
                                    theme="snow"
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        display: 'inline-block',
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="submit"
                                    value="Update"
                                    className="btn btn-primary w-100"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateInterview
