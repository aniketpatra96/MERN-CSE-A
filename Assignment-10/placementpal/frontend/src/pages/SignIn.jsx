import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../apiservice/UserService'
import { useAuth } from '../contexts/AuthContext'

const SignIn = () => {
    const authContext = useAuth()
    const { login } = authContext 
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [ error, setError] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = {
            email, password
        }
        console.log(user);
        let res = await userService.loginUser(user)
        console.log(res);
        if(res.status){
            setMessage("Login Successfull ")
            setEmail("")
            setPassword("")
            setError(false)
            login(res.data.token)
            navigate("/")
        } else {
            setMessage(res.message)
            setError(true)
        }
    }

    // console.log("Rendered");

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <p className={error ? 'text-danger' : 'text-success'}>{message}</p>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <input
                                    type="email"
                                    className='form-control'
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    type="password"
                                    className='form-control'
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="my-1">
                                <input type='submit' value="Login" className='btn btn-primary w-100' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
