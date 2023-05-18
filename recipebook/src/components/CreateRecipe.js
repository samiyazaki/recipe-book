import React, { useState } from 'react';
import axios from 'axios';

function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/add', recipe)
      .then(res => console.log(res.data));

    setTitle('');
    setIngredients([]);
    setInstructions('');
  }

  return (
    <div>
      <h3>Create New Recipe</h3>
      <form onSubmit={onSubmit}>
        {/* Form fields to set title, ingredients, and instructions */}
      </form>
    </div>
  );
}

export default CreateRecipe;