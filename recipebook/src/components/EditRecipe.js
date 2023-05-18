import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditRecipe(props) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/recipes/' + props.match.params.id)
      .then(response => {
        setTitle(response.data.title);
        setIngredients(response.data.ingredients);
        setInstructions(response.data.instructions);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [props.match.params.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/update/' + props.match.params.id, recipe)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div>
      <h3>Edit Recipe</h3>
      <form onSubmit={onSubmit}>
        {/* Form fields to edit title, ingredients, and instructions */}
      </form>
    </div>
  );
}

export default EditRecipe;