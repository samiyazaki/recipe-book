import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
