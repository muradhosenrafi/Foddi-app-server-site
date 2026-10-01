import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import { createItem, getItems, deleteItem } from "../contollers/itemsContollers.js";

const itemRouter = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, "..", "uploads");

// Multer doesn't create the folder when destination is a function
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`),
});

const upload = multer({ storage });

itemRouter.post("/", upload.single("image"), createItem);
itemRouter.get("/", getItems);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;