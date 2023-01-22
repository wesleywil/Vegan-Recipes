import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { remove_ingredient } from "../../../redux/ingredients/ingredients";

import { FaTrashAlt } from "react-icons/fa";

const InRecipeIngredients = () => {
  const ingredientsById = useSelector(
    (state: RootState) => state.ingredients.ingredientsById
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=" px-2 border-r-2 border-[#358546] w-1/2">
      <h2 className="text-center text-4xl font-semibold mb-2">In dish</h2>
      {ingredientsById.length ? (
        ingredientsById.map((ing, i) => (
          <li
            className="ml-2 text-2xl flex gap-2 justify-between w-full"
            key={i}
          >
            {ing.name}
            <button
              onClick={() => dispatch(remove_ingredient(ing))}
              className="text-xl mr-2 text-red-600 hover:text-red-400 self-center transform duration-700 ease-in-out"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))
      ) : (
        <h3 className="text-xl text-center ">NO INGREDIENTS ADDED</h3>
      )}
    </div>
  );
};

export default InRecipeIngredients;
