import itemModal from "../models/itemModal.js";


export const createItem= async (req,res,next)=>{
 try{
   const{name,description,category,price,rating,hearts}=req.body;
  const imageUrl = req.file ? `/uploads/ ${req.file.filename}` : ""

  const total = Number(price)*1;
  const newItem = new itemModal({
    name,description,category,price,rating,hearts,imageUrl,total
  })
  const saved = await newItem.save()

 }catch(error){



 }
}