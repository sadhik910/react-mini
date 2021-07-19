let obj = require("./token");
let auth = (req,res,next) =>{
    let allHeaders = req.headers;
    let c_token = allHeaders.token;
    if(c_token == obj.token){
        next();
    }else{
        res.send({msg:"Unautherizeduser!!!"})
    }
}
module.exports=auth;