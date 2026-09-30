import express from "express"

import multer from "multer"

import { createItem,getItems,deleteItem} from './../contollers/itemsContollers.js';

const itemRouter = express.Router()


//TYPE HERE MUTER FUNCTION TO STORE

const Storage = multer.diskStorage({
    diskStorage: (_res,_file, cb) =>cb(null, "uploads/"),
    filename:(_req,file,cb)=>cb(null, `${Date.now()}-${file.fileoriginalname}`)
})

const upload = multer ({storage})

itemRouter.post ("/",upload.single("image"), createItem)
itemRouter.get("/",getItems);
itemRouter.delete("/:id",deleteItem)

export default itemRouter