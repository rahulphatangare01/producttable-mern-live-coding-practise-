const mongoose = require('mongoose');

 const productSchema = new mongoose.Schema({
    productname:{type:String},
    price:{type:Number},
    quantity:{type:String},
    brand:{type:String}
 })
 const Product = mongoose.model('product', productSchema)
 module.exports = Product