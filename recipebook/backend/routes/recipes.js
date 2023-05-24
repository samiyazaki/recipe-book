const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const ingredients = req.body.ingredients;
    const instructions = req.body.instructions;
  
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
    });
  
    newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/delete/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch(err=> res.status(400).json('Error: ' + err));
  });
  
module.exports=router;