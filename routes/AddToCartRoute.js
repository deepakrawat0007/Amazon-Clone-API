const router = require("express").Router();
// const mongoose = require("mongoose");
const Cart = require("../modal/CartSchema");



router.post("/addtocart",async(req,res)=>{
    // console.log(req.user);

    try{
   const data = await Cart.create({user:req.user, ...req.body});
        res.status(201).json({
            status : "success",
            item:data,
            message: "data added"
        });
    }
    catch(e){
        res.status(406).json({
            status:"Failed",
            message:e.message,
        })
    }
})

module.exports = router