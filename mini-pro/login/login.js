let mongodb = require("mongodb");
let macroid = mongodb.MongoClient;

let obj = require("../config/token");
let generateToken = require("../config/generateToken");

let login = require("express").Router().post("/",(req,res)=>{
    macroid.connect("mongodb://localhost:27017/authproject",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        let token = generateToken({"uname":req.body.uname,"upwd":req.body.upwd},"hr@macroid.in");
                        obj.token = token;
                        res.send({login:"success",token:token});
                    }else{
                        res.send({login:"fail"});
                    }
                }
            });
        }
    });
});
module.exports=login;