import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8', '1.1.1.1']);
export const connectDb= async () =>{
    await mongoose.connect('mongodb+srv://Rafi12354:3W5MRmBED8fNmQ_@cluster0.dqm9vod.mongodb.net/Foddi')
    .then(()=> console.log("DB connect"))
}


