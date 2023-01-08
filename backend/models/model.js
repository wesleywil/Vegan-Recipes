const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    }
});

const recipesSchema = new mongoose.Schema({
    name: {
        required: true,
        type:String
    },
    description: {
        required: true,
        type: String
    },
    ingredients:[ingredientsSchema],
    category:{
        required:true,
        type:String
    },
    preparation_time:{
        required:true,
        type:Number
    }
})

const ingredientsModel = mongoose.model("ingredientsModel",ingredientsSchema);
const recipesModel = mongoose.model("recipesModel", recipesSchema);

module.exports = {
    ingredientsModel:ingredientsModel,
    recipesModel:recipesModel

}