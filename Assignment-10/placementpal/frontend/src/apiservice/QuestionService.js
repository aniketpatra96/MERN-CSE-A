import axios from 'axios'

class QuestionService {
    constructor(){
        this.api = import.meta.env.VITE_API
    }

    async addQuestion(question){
        try {
            const res = await axios.post(this.api+"question", question)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async updateQuestion(id, question){
        try {
            const res = await axios.put(this.api+"question/"+id, question)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async deleteQuestion(id){
        try {
            const res = await axios.delete(this.api+"question/"+id)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }
}

const questionService = new QuestionService()
export default questionService