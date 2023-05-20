import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;