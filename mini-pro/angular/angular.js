let mongodb = require("mongodb");
let macroid = mongodb.MongoClient;
let angular = require("express").Router().get('/',[require("../config/auth")],(req,res)=>{
    macroid.connect("mongodb://localhost:27017/authproject",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("angular").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array)
                }
            });
        }
    });
});
module.exports=angular;