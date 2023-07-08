const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const recipesRouter=require('./routes/recipes');
const path = require('path');
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/recipes',recipesRouter);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.log(err));

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
}
)

console.log('process.env.ATLAS_URI: ', process.env.ATLAS_URI);
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
}
);

app.listen(process.env.PORT || 8080);