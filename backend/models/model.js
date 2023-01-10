const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    }
});

const ingredientsModel = mongoose.model("Ingredients",ingredientsSchema);

const recipesSchema = new mongoose.Schema({
    name: {
        required: true,
        type:String
    },
    description: {
        required: true,
        type: String
    },
    ingredients:[{type:mongoose.Schema.Types.ObjectId, ref:"ingredients"}],
    category:{
        required:true,
        type:String
    },
    preparation_time:{
        required:true,
        type:Number
    },
    special:{
        required:true,
        type:Boolean
    }
})


const recipesModel = mongoose.model("Recipes", recipesSchema);

module.exports = {
    ingredientsModel:ingredientsModel,
    recipesModel:recipesModel

}