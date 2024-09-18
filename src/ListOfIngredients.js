export default function ListOfIngredients({ ingredients }) {
  return (
      <div>
      <h2>Ingredients</h2>
      <ul>
      {ingredients.map((ingredient, index) => (
	  <li key={index}>{ingredient}</li>
      ))}
    </ul>
      </div>
  );
}
