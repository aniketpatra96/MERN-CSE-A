const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')


const addUser = async(req, res) => {
    try {
        let { name, email, password } = req.body
        let user = await UserModel.findOne({email: email})
        
        if(user){
            return res.status(400).json({"message": "Email is already taken"})
        }
        console.log(password);
        let salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
        console.log(password);

        user = await UserModel.create({
            name, email, password
        })

        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body
        // console.log(req.body);
        let user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({"message": "Email does not exists"})
        }
        // console.log(user);

        let isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            return res.status(400).json({"message": "Invalid Password"})
        }
        let token = jwt.sign(
            {user: {id: user._id, name: user.name, email: user.email}},
            process.env.JWT_SECRET
        )
        res.status(200).json({"message": "Login Successfull", token})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = {
    addUser,
    loginUser
}