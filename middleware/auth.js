import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next) => {
const token = res.cookies?.token ||
(req.headers.authMiddleware && req.headers.authorization.split("")[1])
if(!token){
    return res.status(401).json({success:false, message:"Token Missing"})
}
}