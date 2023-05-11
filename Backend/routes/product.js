//const { error } = require("console")
const express=require("express")
const routes=express.Router()
const School=require('../models/product')


routes.get('/get',async(req,res)=>{
    try{
    const items= await School.find();
   
    res.send(items);
    }
    catch(err){
        console.log(err)
    }
})

routes.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        console.log(req.body);
        console.log("inserted");
        const list=await School.insertMany(req.body);
        res.send({list});
    }catch(err){
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
})

    
module.exports=routes