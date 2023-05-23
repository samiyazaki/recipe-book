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

  return (
    <div className="container">
      <h3 className="my-4">Recipes List</h3>
      {recipes.map((recipe, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header">
            {recipe.title}
          </div>
          <div className="card-body">
            <h5 className="card-title">Ingredients</h5>
            <p className="card-text">{recipe.ingredients.join(', ')}</p>
            <h5 className="card-title">Instructions</h5>
            <p className="card-text">{recipe.instructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
