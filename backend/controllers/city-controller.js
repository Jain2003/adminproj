const { findByIdAndUpdate, findOne } = require("../models/City.js");
const City = require("../models/City.js");

const getAllCities = async(req,res) =>{
    let cities;
    try{
        cities = await City.find();
    }catch(err){
        console.log(err);
    }
    if(!cities){
        return res.status(404).json({message: "No cities found"});
    }
    return res.status(200).json({cities});
}

const getCityById = async(req,res) =>{
    const id = req.params.id;
    let city;
    try{
        city = await City.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!city){
        return res.status(404).json({message: "No city with id found"});
    }
    return res.status(200).json({city})
}

const addNewCity = async(req, res) =>{
    const {displayName, countryCode, countryName, currencyCode, currencyName, timeZone, thumbnailSrc} = req.body;
    let newCity;
    try{
         newCity = new City({
            displayName,
            countryCode,
            countryName,
            currencyCode,
            currencyName,
            timeZone,
            thumbnailSrc
        });
        await newCity.save();
    }catch(err){
        console.log(err)
    }
    if(!newCity){
        return res.status(404).json({message: "no New City added"});
    }
    return res.status(200).json({newCity})
}

const updateCity = async (req, res) =>{
    const {displayName, countryCode, countryName, currencyCode, currencyName, timeZone, thumbnailSrc} = req.body;
    const id = req.params.id;
    let updateCity;
    try{
        updateCity = City,findByIdAndUpdate(id, {
            displayName,
            countryCode,
            countryName,
            currencyCode,
            currencyName,
            timeZone,
            thumbnailSrc
       });
       await updateCity.save();
   }catch(err){
       console.log(err)
   }
   if(!newCity){
       return res.status(404).json({message: "no city updated"});
   }
   return res.status(200).json({newCity})
}
const deleteCity = async(req,res) =>{
    let cityDeleted;
    const id = req.params.id;
    try{
        cityDeleted = await City.findByIdAndDelete(id);
    }catch(err){
        console.log(err)
    }
    if(!cityDeleted){
        return res.status(404).json({message: "No city found"});
    }
    return res.status(200).json({city});
}


// this is for search bar.chuck for now.
const getCityByName = async(req,res)  =>{
    let city;
    const citySerached = req.params.cityName;
    try{
        city = await City.findOne({displayName : citySerached });
    }catch(err){
        console.log(err);
    }
    if(!city){
        return res.status(404).json({message: "no such city found"});
    }
    else{
        return res.status(200).json({city});
    }
}

exports.getAllCities = getAllCities;
exports.getCityById = getCityById;
exports.deleteCity = deleteCity;
exports.addNewCity = addNewCity;
exports.updateCity = updateCity;
exports.getCityByName = getCityByName;