import React, { useState } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';


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

function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 180,
      origin: { y: 0.6 },
    });
    }

  const onSubmit = (e) => {
    e.preventDefault();
    shootConfetti();
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
