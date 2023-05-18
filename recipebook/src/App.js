import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={RecipesList} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
      </div>
    </Router>
  );
}

export default App;