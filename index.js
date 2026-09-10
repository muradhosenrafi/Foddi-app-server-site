import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectDb } from "./config/db.js";

const app = express()
const port = process.env.PORT || 4000 ;


 // MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//DATABASE

connectDb()


 //ROUTES

 app.get('/',(req,res)=>{
    res.send('Api working')
 })


 app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    
 })