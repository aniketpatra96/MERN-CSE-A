import axios from 'axios'

class InterviewService {
    constructor(){
        this.api = import.meta.env.VITE_API
    }

    async allInterviews(){
        try {
            const res = await axios.get(this.api+"interview")
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async interviewDetails(id){
        try {
            const res = await axios.get(this.api+"interview/details/"+id)
            console.log(res.data);
            return {status: true, data: res.data[0]}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async addInterview(interview){
        try {
            const res = await axios.post(this.api+"interview", interview)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async updateInterview(id, interview){
        try {
            const res = await axios.put(this.api+"interview/"+id, interview)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async deleteInterview(id){
        try {
            const res = await axios.delete(this.api+"interview/"+id)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }
}

const interviewService = new InterviewService();
export default interviewService