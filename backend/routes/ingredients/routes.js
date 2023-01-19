const express = require('express');
const {ingredientsModel} = require('../../models/model');
const ingredientsRoutes = express.Router();

//Post Method
ingredientsRoutes.post('/post', async(req, res)=>{
    const data = new ingredientsModel({
        name:req.body.name
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

// Get All Method
ingredientsRoutes.get('/get', async(req, res)=>{
    try{
        const data = await ingredientsModel.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

ingredientsRoutes.post('/getMultiple', async(req, res)=>{
    try{
        const data = await ingredientsModel.find({
             '_id': { 
                $in: req.body.ids
            }
        })
        res.json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Get by ID Method
ingredientsRoutes.get('/get/:id', async(req, res)=>{
   try {
        const data = await ingredientsModel.findById(req.params.id);
        res.json(data)
   } catch (error) {
        res.status(500).json({message:error.message})
   }
})

// Update by ID Method
ingredientsRoutes.patch('/update/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = {new:true};
        const result = await ingredientsModel.findByIdAndUpdate(id, updateData, options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// Delete By Id Method
ingredientsRoutes.delete('/delete/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const data = await ingredientsModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted!`)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = ingredientsRoutes;