import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { switch_ingredients_view } from "../../../redux/admin/admin";
import {
  fetchIngredientsByIds,
  fetchIngredients,
  add_ingredient,
  remove_ingredient,
} from "../../../redux/ingredients/ingredients";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const RecipeIngredients = () => {
  const item = useSelector((state: RootState) => state.dish.recipe);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const ingredientsById = useSelector(
    (state: RootState) => state.ingredients.ingredientsById
  );
  const status = useSelector((state: RootState) => state.ingredients.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Recipes Ingredients Components!");
    dispatch(fetchIngredientsByIds(item.ingredients));
    if (status === "idle") {
      dispatch(fetchIngredients());
    }
  }, [item]);
  return (
    <div className="centered z-20  md:w-1/2 xl:w-1/3 pattern2 border border-black rounded-xl">
      <div className="bg-[#358546]/80 text-white font-bold flex justify-between rounded-t-xl p-1">
        <span className="self-center text-sm px-2 ">Ingredients</span>
        <button
          onClick={() => dispatch(switch_ingredients_view())}
          className="mx-2 self-center bg-white text-[#358546] hover:text-red-600 text-xl px-2 rounded-full transition durarion-700 ease-in-out"
        >
          X
        </button>
      </div>
      <div className="p-2 ">
        <div className="p-2 flex justify-between gap-2 border border-[#358546]/60 rounded-xl">
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
        </div>
        <div className="flex justify-center my-2 ">
          <button className="text-2xl text-white font-semibold bg-[#358546] hover:bg-[#20522b]/70 px-2 py-1 rounded-full transform duration-700 ease-in-out">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredients;
