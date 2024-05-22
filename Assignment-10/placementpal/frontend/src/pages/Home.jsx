import { useState, useEffect } from 'react'
// import axios from 'axios'
import InterviewCard from '../components/InterviewCard'
import interviewService from '../apiservice/InterviewService'

const Home = () => {
  const [ interviews, setInterviews ] = useState([])
  const getAllInterviews = async() =>{
    let res = await interviewService.allInterviews()
    if(res.status){
      setInterviews(res.data)
    }
  }

  useEffect(()=>{
    getAllInterviews()
  }, [])
  return (
    <div className='d-flex flex-wrap'>
      {
        interviews && interviews.map( interview => <InterviewCard key={interview._id} interview={interview} />)
      }
    </div>
  )
}

export default Home
