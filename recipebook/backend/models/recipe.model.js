const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    time: {type: Number, required: true},
    servings: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;