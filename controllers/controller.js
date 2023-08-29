let collection = require ('../models/cat');

const postCat = (req,res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result)=>{
        if(!err){
            res.json({statusCode:201, data:result, message:'success'})
        }
    });
}

const getAllCats = (req,res) => {
    collection.getAllCats((err, result)=>{
        if(!err){
            res.json({statusCode:200, data:result, message:'Get allcats successful'})
        }
    });
}

const deleteCat = (req,res) => {
    let cat = req.body;
    collection.deleteCat(cat, (err, result)=>{
        if(!err){
            res.json({statusCode:202, data:result, message:'success'})
        }
    });
}

module.exports = {postCat, getAllCats, deleteCat};