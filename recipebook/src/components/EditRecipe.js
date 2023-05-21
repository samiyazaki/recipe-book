import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/recipes/' + id)
      .then(response => {
        setTitle(response.data.title);
        setIngredients(response.data.ingredients);
        setInstructions(response.data.instructions);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/update/' + id, recipe)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div>
      <h3>Edit Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Ingredients: </label>
          <input  type="text"
              required
              className="form-control"
              value={ingredients}
              onChange={e => setIngredients(e.target.value.split(','))}
              />
        </div>
        <div className="form-group"> 
          <label>Instructions: </label>
          <input  type="text"
              required
              className="form-control"
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;
