const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const title=req.body.title;
    const ingredients=req.body.ingredients;
    const instructions=req.body.instructions;
    const time=Number(req.body.time);
    const servings=Number(req.body.servings);
    const image=req.body.image;
    const category=req.body.category;
    const date=Date.parse(req.body.date);

    const newRecipe=new Recipe({
        title,
        ingredients,
        instructions,
        time,
        servings,
        image,
        category,
        date,
    });

    newRecipe.save()
    .then(()=>res.json('Recipe added!'))
    .catch(err=>res.status(400).json('Error: '+err));
}
);

module.exports=router;