const express = require("express");

const app = express();
const{uploadFiles}=require("./controllers/uploadFiles.js");

const dB=require('./middlewares/dB.js')
dB.connectTodB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')
const excelRoutes=require("./routes/excelRoutes.js");
app.use("",excelRoutes)
app.listen(5000, () => {
  console.log("server started");
});
