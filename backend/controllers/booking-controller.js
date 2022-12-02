const Booking = require("../models/Booking.js");
const getAllBookings = async(req,res) =>{
    let bookings;
    try{
        bookings = await Booking.find();
    }catch(err){
        console.log(err)
    }
    if(!bookings){
        return res.status(404).json({message: "no records found"});
    }
    return res.status(200).json({bookings})
}

const getBookingbyId = async(req,res) =>{
    let id = req.params.id;
    let booking;
    try{
        booking = await Booking.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!booking){
        return res.status(404).json({message: "no such booking found"});
    }
    return res.status(200).json({booking})
}

const deleteBooking = async(req,res) =>{
    let id = req.params.id;
    let booking;
    try{
        booking = await Booking.findByIdAndDelete(id)
    }catch(err){
        console.log(err)
    }
    if(!booking){
        return res.status(404).json({message: "no such booking deleted"});
    }
    return res.status(200).json({booking})
}

const updateBooking = async(req,res) =>{4

    let id = req.params.id;
    const {fullName, email, phone, adults, children, infants, date, time, experienceId, variantId} = req.body;
    let booking;
    try{
        booking = await Booking.findByIdAndUpdate(id, {
            fullName,
            email,
            phone,
            adults,
            children,
            infants,
            date,
            time,
            experienceId,
            varientId
        })
        await booking.save();
    }catch(err){
        console.log(err);
    }
    if(!booking){
        return res.status(404).json({message: "Booking not found"});
    }
    return res.status(200).json({booking});
}


exports.getAllBookings = getAllBookings
exports.getBookingbyId = getBookingbyId
exports.deleteBooking = deleteBooking
exports.updateBooking = updateBooking