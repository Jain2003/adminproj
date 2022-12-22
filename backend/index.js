const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const cors = require("cors");
const cityRouter = require("./routes/city-routes.js");
// const experienceRouter = require("./routes/experience-routes.js");
const userRouter = require("./routes/user-routes.js");
const bookingsRouter = require("./routes/booking-routes.js")
const app = express();


app.use(express.json());
app.use(
    cors({
      origin:"*",
})
);
app.use("/cities", cityRouter);
// app.use("/experience", experienceRouter);
app.use("/users", userRouter);
app.use("/bookings", bookingsRouter)

mongoose.connect("mongodb+srv://admin:y7QQ4lYQDv5RpGo0@bookingappcluster.2j8zlk4.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("database successfully connected")
}).then(()=> {
    app.listen(4000, ()=>{
        console.log("the server is active on port 4000");
    })
})
