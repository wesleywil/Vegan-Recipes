const express = require('express');
const {recipesModel} = require('../../models/model');
const recipesRoutes = express.Router();

//Post Method
recipesRoutes.post('/post', async (req, res) => {
    const data = new recipesModel({
       name: req.body.name,
       description: req.body.description,
       ingredients:req.body.ingredients,
       category:req.body.category,
       preparation_time:req.body.preparation_time,
       special: req.body.special
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Get All Method
recipesRoutes.get('/get', async(req, res)=>{
    try{
        const data = await recipesModel.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Get by ID Method
recipesRoutes.get('/get/:id', async(req, res)=>{
   try {
        const data = await recipesModel.findById(req.params.id);
        res.json(data)
   } catch (error) {
        res.status(500).json({message:error.message})
   }
})

// Update by ID Method
recipesRoutes.patch('/update/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = {new:true};
        const result = await recipesModel.findByIdAndUpdate(id, updateData, options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// Delete By Id Method
recipesRoutes.delete('/delete/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const data = await recipesModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted!`)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = recipesRoutes;