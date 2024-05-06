import { useState } from 'react'
import userService from '../apiservice/UserService'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newUser = {
            name, email, password
        }
        console.log(newUser);
        let res = await userService.registerUser(newUser)
        console.log(res);
        if(res.status){
            setMessage("Registration Successfull ")
            setName("")
            setEmail("")
            setPassword("")
        } else {
            setMessage(res.message)
        }
    }

    // console.log("Rendered");

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>
                        <p>{message}</p>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    type="email"
                                    className='form-control'
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    type="password"
                                    className='form-control'
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="my-1">
                                <input type='submit' value="Register" className='btn btn-primary w-100' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
