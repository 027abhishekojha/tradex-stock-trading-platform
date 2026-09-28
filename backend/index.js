const express = require("express")
require("dotenv").config();
const mongoose = require("mongoose");

const mongo_URI = process.env.MONGO_URL


const app = express();


app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log("Express App Started");
    try {
        mongoose.connect(mongo_URI);
        console.log("Mongo Db Connected Successfully")
    } catch (error) {
        console.log("some error occured",error);
        
    }
   
   
})

// app.get("/", (req, res) => {
//     res.send(`Port 404 is working`)
// })