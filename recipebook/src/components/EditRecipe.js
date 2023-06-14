import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F7FA',
  },
  title: {
      color: '#1ecbe1',
      fontFamily: 'Comic Sans MS', 
      fontSize: '32px', 
      marginTop: '1em',
  },
  form: {
      backgroundColor: '#ffffff', 
      borderRadius: '5px', 
      padding: '2em', 
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', 
      width: '80%',
      fontFamily: 'Comic Sans MS', // Playful font
  },
  formGroup: {
      marginBottom: '1em', // Space between form elements
  },
  formControl: {
      height: '2.5em', // Higher input fields for easier interaction
  },
  button: {
      backgroundColor: '#1ecbe1', // Vibrant color
      color: '#ffffff', // White color for contrast
      fontFamily: 'Comic Sans MS', // Playful font
  },
};

function EditRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/recipes/' + id)
      .then(response => {
        console.log("Response date:", response.data);
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
    <div className="container">
      <h3 className="my-4">Edit Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <input type="text" className="form-control" value={ingredients.join(', ')} onChange={e => setIngredients(e.target.value.split(','))} />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea className="form-control" value={instructions} onChange={e => setInstructions(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
}

export default EditRecipe;
