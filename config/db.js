import mongoose from "mongoose";

dns.setServers(['8.8.8.8', '0.0.0.0/0']);
export const connectDb= async () =>{
    await mongoose.connect('mongodb+srv://Rafi12354:3W5MRmBED8fNmQ_@cluster0.dqm9vod.mongodb.net/Foddi')
    .then(()=> console.log("DB connect"))
}


