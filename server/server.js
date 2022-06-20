const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
const cors = require('cors')
const port = process.env.port || 8082
const productData = require('./routes/productData')
//  middleware

app.use(express.json());
app.use(cors());
//  routes
app.use('/api/data',productData)

mongoose.connect('mongodb://localhost:27017/producttable').then(()=>{
    console.log("Database connected")
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})