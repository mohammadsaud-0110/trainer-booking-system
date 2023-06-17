const express = require("express");
const {UserModel} = require("../model/user.model")
const {BookingModel} = require("../model/booking.model")
const { authMiddleWare } = require("../middleware/jwt.middleware")

const bookingRoute = express.Router();


bookingRoute.get("/", authMiddleWare, async(req,res)=>{
    try {
        let data = await BookingModel.find().populate("photographer client","name");
        res.status(200).send({ data, ok: true });
    }
    catch (error) {
        res.status(500).json({ok:false, message: error.message });
    }
    
});

bookingRoute.get('/order/:userID', authMiddleWare, async (req, res) => {
    try {
      // Get the logged-in client's ID
      const clientId = req.params.userID;

      // Find all booking requests for the logged-in photographer from the database
      const allorders = await BookingModel.find({ client: clientId }).populate('photographer', 'name email');
      res.status(200).json({ ok: true, allorders });
    } 
    catch (err) {
      res.status(500).send({ error: err.message, mssg: 'Server Error', ok: false });
    }
});

bookingRoute.post('/book', authMiddleWare,async (req, res) => {
  
    const { photographerId, startTime, endTime } = req.body;
  
    try {
      // Check if photographer and client exist in the database
      const photographer = await UserModel.findById(photographerId);
      if (!photographer){
        return res.status(400).json({ message: 'Invalid photographer or client ID', ok:false });
      }
      // Create the booking
      const booking = new BookingModel({
        photographer: photographerId,
        client: req.user.id,
        start_time: new Date(startTime),
        end_time: new Date(endTime),
      });
      // Save the booking to the database
      await booking.save();
      return res.status(201).json({ message: 'Booking request sent successfully', ok:true });
    } 
    catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message, ok:false });
    }
  });




module.exports = {
    bookingRoute
}