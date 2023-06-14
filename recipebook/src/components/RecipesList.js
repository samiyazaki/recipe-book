import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const deleteRecipe = (id) => {
    axios.delete('http://localhost:5000/recipes/delete/' + id)
      .then(response => {
          console.log(response.data);
          setRecipes(recipes.filter(el => el._id !== id));
      });
  }

    const editRecipe = (id) => {
        window.location = '/edit/' + id;
    }



  return (
    <div>
      <h3>Recipes</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(currentrecipe => (
            <tr key={currentrecipe._id}>
              <td>{currentrecipe.title}</td>
              <td>{currentrecipe.ingredients.join(', ')}</td>
              <td>{currentrecipe.instructions}</td>
              <td>
                <button onClick={() => editRecipe(currentrecipe._id)}>Edit</button>
                <button onClick={() => deleteRecipe(currentrecipe._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipesList;
