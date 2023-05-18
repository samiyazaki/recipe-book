import React, {useState, useEffect} from 'react';
import Link from 'react-router-dom';
import axios from 'axios';

function RecipesList() {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/recipes/')
        .then(response => {
          setRecipes(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);
  
    const recipeList = () => {
      return recipes.map(currentrecipe => {
        return (
          <tr key={currentrecipe._id}>
            <td>{currentrecipe.title}</td>
            <td>{currentrecipe.ingredients.join(', ')}</td>
            <td>
              <Link to={"/edit/"+currentrecipe._id}>edit</Link> 
            </td>
          </tr>
        );
      })
    }
  
    return (
      <div>
        <h3>Recipes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Ingredients</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { recipeList() }
          </tbody>
        </table>
      </div>
    );
  }
  
  export default RecipesList;