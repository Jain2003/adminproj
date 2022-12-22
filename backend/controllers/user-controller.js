const User = require("../models/User.js");
const Experience = require("../models/Experience.js");
const getAllUsers = async(req, res) =>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "no records found"});
    }
    return res.status(200).json({users});
}

const getUserById = async(req,res) =>{
    const id = req.params.id;
    let user;
    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"no user found"});
    }
    return res.status(200).json({user});
}

const updateUser = async(req,res) =>{
    const {email, booking } = req.body;
    const id = req.params.id;
    let user;
    try{
        user  = await User.findByIdAndUpdate(id, {
            email,
            booking
        })
        await user.save();
    }catch(err){
        console.log(err)
    }
    if(!user){
        return res.status(404).json({message:"no such user updated"})
    }
    return res.status(200).json({message:"user updated"})
}

const getUsersByExperience = async(req,res) =>{
    const experienceName = req.params.experienceName;
    let experience;
    try{
        experience = await Experience.find({displayName: experienceName})
    }catch(err){
        console.log(err);
    }
    if(!experience){
        return res.status(404).json({message:"no user found"});
    }
    return res.status(200).json({experience});
}

const deleteUser = async (req,res) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"error deleting"});
    }
    return res.status(200).json(user);
}


exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.deleteUser = deleteUser;
// exports.getUsersByExperience = getUsersByExperience;
exports.updateUser = updateUser;