const  Router  = require('express');
const express = require('mongoose');
const router = Router();
const Product = require('../model/Product')

//  Create Product Data

router.post('/product',async(req,res)=>{
try {
    let product = await Product.create(req.body)
    res.status(200).json({sucess:true,product})
} catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal server error"})
}
})


// 
router.get('/getproduct',async(req,res)=>{
    try {
        let product = await Product.find()
        res.status(200).json({sucess:true,product})
        
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server error")
    }
})



module.exports = router