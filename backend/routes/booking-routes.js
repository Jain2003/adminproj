const express = require("express");
const router = express.Router();
const bookingsControlller = require("../controllers/booking-controller.js")
router.get("/", bookingsControlller.getAllBookings);
router.get("/:id", bookingsControlller.getBookingbyId);
router.delete("/:id", bookingsControlller.deleteBooking);
router.put("/", bookingsControlller.updateBooking);

module.exports = router;
