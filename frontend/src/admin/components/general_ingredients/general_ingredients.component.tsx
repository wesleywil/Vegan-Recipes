import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { add_ingredient } from "../../../redux/ingredients/ingredients";

import { FaPlus } from "react-icons/fa";

const GeneralIngredients = () => {
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=" px-2 w-1/2">
      <h2 className="text-center text-4xl font-semibold mb-2">All</h2>
      {ingredients.length ? (
        ingredients.map((ing, i) => (
          <li
            className="mr-2 text-2xl flex gap-2 justify-between w-full"
            key={i}
          >
            <button
              onClick={() => dispatch(add_ingredient(ing))}
              className="ml-2 text-xl text-green-600 hover:text-green-400 self-center transform duration-700 ease-in-out"
            >
              <FaPlus />
            </button>
            {ing.name}
          </li>
        ))
      ) : (
        <h3 className="text-xl text-center ">NO INGREDIENTS</h3>
      )}
    </div>
  );
};

export default GeneralIngredients;
