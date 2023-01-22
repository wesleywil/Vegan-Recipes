import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { switch_ingredients_view } from "../../../redux/admin/admin";
import {
  fetchIngredientsByIds,
  fetchIngredients,
} from "../../../redux/ingredients/ingredients";
import { updateRecipe } from "../../../redux/dish/dish";

import InRecipeIngredients from "../in_recipe_ingredients/in_recipe_ingredients.component";
import GeneralIngredients from "../general_ingredients/general_ingredients.component";

const RecipeIngredients = () => {
  const item = useSelector((state: RootState) => state.dish.recipe);
  const ingredientsById = useSelector(
    (state: RootState) => state.ingredients.ingredientsById
  );
  const status = useSelector((state: RootState) => state.ingredients.status);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateRecipe = () => {
    let x: Array<string> = [];
    ingredientsById.forEach((item) => {
      x = [...x, item._id];
    });
    const newData = {
      ...item,
      ingredients: x,
    };
    console.log("NEW DATA=> ", newData);
    dispatch(updateRecipe(newData));
    dispatch(switch_ingredients_view());
  };

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
          <InRecipeIngredients />
          <GeneralIngredients />
        </div>
        <div className="flex justify-center my-2 ">
          <button
            onClick={() => handleUpdateRecipe()}
            className="text-2xl text-white font-semibold bg-[#358546] hover:bg-[#20522b]/70 px-2 py-1 rounded-full transform duration-700 ease-in-out"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredients;
