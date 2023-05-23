import React, { useState } from 'react';
import axios from 'axios';

function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (title === '' || ingredients.length === 0 || instructions === '') {
      alert('All fields must be filled out');
      return;
    }

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
    <div className="container">
      <h3 className="my-4">Create New Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <input type="text" className="form-control" value={ingredients.join(', ')} onChange={e => setIngredients(e.target.value.split(',').map(ingredient => ingredient.trim()))} />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea className="form-control" value={instructions} onChange={e => setInstructions(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
