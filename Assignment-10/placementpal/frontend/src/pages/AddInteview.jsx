import { useRef, useState } from 'react'
import interviewService from '../apiservice/InterviewService'

const AddInteview = () => {
    const companyNameRef = useRef()
    const interviewDateRef = useRef()
    const placeRef = useRef()
    const roleRef = useRef()
    const broadAreaRef = useRef()
    const isFresherRef = useRef()

    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>{
      e.preventDefault()
      const newInterview = {
        companyName: companyNameRef.current.value,
        interviewDate: interviewDateRef.current.value,
        place: placeRef.current.value,
        role: roleRef.current.value,
        broadArea: broadAreaRef.current.value.split(","),
        isFresher: isFresherRef.current.checked,
      }
      console.log(newInterview);
      const res = await interviewService.addInterview(newInterview)
      if(res.status){
        setMessage("Interview Added")
        companyNameRef.current.value = ""
        interviewDateRef.current.value = ""
        placeRef.current.value = ""
        roleRef.current.value = ""
        broadAreaRef.current.value = ""
        isFresherRef.current.checked = false
      } else {
        setMessage("Error while adding. Try Again.")
      }
    }

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
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
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={interviewDateRef}
                                    type="date"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={placeRef}
                                    type="text"
                                    placeholder="Interview Location"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={roleRef}
                                    type="text"
                                    placeholder="Position"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    ref={broadAreaRef}
                                    type="text"
                                    placeholder="Broad areas like OOP, DS, HTML, CSS"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="">Is it for freshers?</label>
                                <input
                                    ref={isFresherRef}
                                    type="checkbox"
                                    className="ms-3"
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="submit"
                                    value="ADD"
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

export default AddInteview
