const express=require('express');
const router=express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {certificateGen}=require("../controllers/certificateGen")
const{uploadFiles}=require("../controllers/uploadFiles");

router.post("/uploadfile", upload.single("files"),uploadFiles);
// router.get("/certigen",certificateGen)
module.exports=router;