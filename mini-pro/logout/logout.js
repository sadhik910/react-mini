let obj = require("../config/token");
let logout = require("express").Router().get("/",[require("../config/auth")],(req,res)=>{
    obj.token = "";
    res.send({"logout":"success"});
});
module.exports = logout;