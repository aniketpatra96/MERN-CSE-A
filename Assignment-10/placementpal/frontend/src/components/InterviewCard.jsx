import React from 'react'
import { Link } from 'react-router-dom'

const InterviewCard = ({ interview }) => {
    const { companyName, role, interviewDate, _id } = interview
    return (
        <Link to={"/interviewdetails/"+_id} className='text-decoration-none'>
            <div className="card rounded-0 m-2 interview-card">
                <div className="card-body">
                    <p className="fw-semibold">
                        {companyName} - {role}
                    </p>
                    <p className="text-muted">
                        {new Date(interviewDate).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default InterviewCard
