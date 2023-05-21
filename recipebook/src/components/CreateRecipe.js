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
      ingredients: ingredients.split(','),
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
        <div className="form-group">
          <label>Title: </label>
          <input type="text"
              required
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Ingredients (comma separated): </label>
          <input type="text"
              required
              className="form-control"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Instructions: </label>
          <input type="text"
              required
              className="form-control"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
