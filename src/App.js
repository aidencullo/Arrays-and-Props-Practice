import { recipes } from './data.js';
import Recipe from './Recipe.js';

export default function RecipeList() {
  return (
      <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
	  <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
