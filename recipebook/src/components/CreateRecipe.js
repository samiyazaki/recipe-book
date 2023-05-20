import React, { useState } from 'react';
import axios from 'axios';

function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), // Transform ingredients string into an array
      instructions: instructions,
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/add', recipe)
      .then(res => console.log(res.data));

    setTitle('');
    setIngredients('');
    setInstructions('');
  }

  return (
    <div>
      <h3>Create New Recipe</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label>
          <input 
            type="text" 
            required 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label>Ingredients (separated by commas): </label>
          <input 
            type="text" 
            required 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
          />
        </div>
        <div>
          <label>Instructions: </label>
          <textarea 
            required 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Create Recipe" />
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
