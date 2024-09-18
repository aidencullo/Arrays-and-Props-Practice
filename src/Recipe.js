import ListOfIngredients from './ListOfIngredients.js';

export default function Recipe({ id, name, description, ingredients }) {
  return (
      <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <ListOfIngredients ingredients={ingredients} />
      </div>
  );
}
