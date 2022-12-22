// chuck it for now
// const Experience = require("../models/Experience.js");
// const City  = require("../models/City.js");
// const { findByIdAndDelete, findByIdAndUpdate } = require("../models/City.js");

// const getAllExperience = async(req,res) =>{
//     let experiences;
//     try{
//         experiences = await Experience.find();
//     }catch(err){
//         console.log(err);
//     }
//     if(!experiences){
//         return res.status(404).json({message:"no records Found"});
//     }
//     return res.status(200).json({experiences});
// }

// const getExperienceById = async(req,res) =>{
//     const id = req.params.id;
//     let experience;
//     try{
//         experience = await Experience.findById(id);
//     }catch(err){
//         console.log(err);
//     }
//     if(!experience){
//         return res.status(404).json({message: "Experience not found"});
//     }
//     return res.status(200).json({experience});
// }

// const addNewExperience = async(req,res) =>{
//     const {cityId, displayName, startingPrice, nextAvailable, duration, thumbnailSrc} = req.body;
//     let newExperience;
//     try{
//         newExperience = new Experience({
//             cityId,
//             displayName,
//             startingPrice,
//             nextAvailable,
//             duration,
//             thumbnailSrc
//         })
//         await newExperience.save();
//     }catch(err){
//         console.log(err);
//     }
//     if(!newExperince){
//         return res.status(404).json({message: "no new experince added"})
//     }
//     return res.status(200).json({message:"new City added"})
// }

// const updateExperience = async(req, res) =>{
//     const id = req.params.id;
//     const {cityId, displayName, startingPrice, nextAvailable, duration, thumbnailSrc} = req.body;
//     let updatedExperience;
//     try{
//         updatedExperience = findByIdAndUpdate(id, {
//             cityId,
//             displayName,
//             startingPrice,
//             nextAvailable,
//             duration,
//             thumbnailSrc
//         })
//         await updateExperience.save();
//     }catch(err){
//         console.log(err)
//     }
//     if(!updatedExperience){
//         return res.status(404).json({message: "no experience updated"})
//     }
//     return res.status(200).json({message: "experince Updated"})
// }

// // for the searchbar
// const getExperienceByName = async(req, res) =>{
//     const experienceName = req.params.experienceName;
//     let experience;
//     try{
//         experience = await Experience.findOne({displayName: experienceName});
//     }catch(err){
//         console.log(err);
//     }
//     if(!experience){
//         return res.status(404).json({message: "No expereince Found"});
//     }
//     return res.status(200).json({experience});
// }

// const deleteExperience = async (req,res) =>{
//     const id = req.params.id;
//     let experience;
//     try{
//         experience = await Experience.findByIdAndDelete(id)
//     }catch(err){
//         console.log(err)
//     }
//     if(!experience){
//         return res.status(404).json({message:"no experience found"});
//     }
//     return res.status(200).json("experience");
// }

// exports.getAllExperience = getAllExperience;
// exports.getExperienceById = getExperienceById;
// exports.getExperienceByName = getExperienceByName;
// exports.deleteExperience = deleteExperience;
// // exports.getExperienceByCityName = getExperienceByCityName;
// exports.addNewExperience = addNewExperience;
// exports.updateExperience = updateExperience;