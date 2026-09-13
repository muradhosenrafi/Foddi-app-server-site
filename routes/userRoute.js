import express  from 'express';

import { loginUser,registerUser } from '../contollers/userContollers';


const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post('/login',loginUser)

export default userRouter