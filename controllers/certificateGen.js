const ejs=require("ejs");
exports.certificateGen=async(req, res)=>{
    ejs.render('index',{
        name:"Jipnesh",
        email:"jipneshjindal2003@gmail.com",
        mobile_number:"6284092417",
        amount:"1000",
        number_of_trees:"10"
    })
}