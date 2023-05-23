import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import NavBar from './components/NavBar';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;