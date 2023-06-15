const express = require("express");

const bookingRoute = express.Router();

bookingRoute.get("/", async(req,res)=>{
    res.send({"message":"All Booking Details"})
})






module.exports = {
    bookingRoute
}