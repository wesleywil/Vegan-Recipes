require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('Database Connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const recipesRoutes = require('./routes/recipes/routes');
const ingredientsRoutes = require('./routes/ingredients/routes');

app.use('/api/recipes/', recipesRoutes);
app.use('/api/ingredients', ingredientsRoutes);

app.listen(3000, ()=>{
    console.log(`Server Started at port ${3000}`);
})

