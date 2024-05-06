import axios from 'axios'

class UserService {
    constructor(){
        this.api = import.meta.env.VITE_API
    }

    async registerUser(user){
        try {
            const res = await axios.post(this.api+"user/signup", user)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, message: error?.response?.data?.message}
        }
    }

    async loginUser(user){
        try {
            const res = await axios.post(this.api+"user/signin", user)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, message: error?.response?.data?.message}
        }
    }
}

const userService = new UserService();
export default userService