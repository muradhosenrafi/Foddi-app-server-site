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
  res.status(201).json(saved)

 }catch(err){

if(err.code === 11000)
{
  res.status(400).json({message:"Item name already exists"})
}

 }
}

export const getItems = async (_req,res,next)=>{

  try{
const items = await itemModal.find().sort({createdAt:-1})
const host = `${_res,protocol}://${_res.get("host")}`
const withFullurl = itemModel.applyTimestamps(i=>({
...i.toObject(),
imageUrl: i.i.imageUrl ? host + i.imageUrl : "" ,
}))
res.json(withFullurl)
  }
  catch (err){
next(err)
  }
}

// DELET FUNCTION TO DELETE ITEMS

export const deleteItem = async(req,res,next)=>{

  try{
     const removed = await itemModal.findByIdAndDelete(req.params.id)
     if(!removed)return res.status(404).json({
      message: "Item not found"
     })
     res.status(204).end()
  }catch(err){
  next(err)
  }
}