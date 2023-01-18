import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRecipes } from "../../redux/dish/dish";

import MainDish from "../../components/main_dish/main_dish.component";
import NormalDish from "../../components/normal_dish/normal_dish.component";
import DishDetails from "../../components/dish_details/dish_details.component";

const Recipes = () => {
  const in_view = useSelector((state: RootState) => state.dish.in_view);
  const recipes = useSelector((state: RootState) => state.dish.recipes);
  const status = useSelector((state: RootState) => state.dish.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Fetching all recipes");
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, recipes]);
  return (
    <div className=" h-full min-h-screen	 w-screen flex flex-col ">
      {in_view ? <DishDetails /> : ""}
      <svg viewBox="0 0 450 150">
        <text className="svgText" x="50" y="90">
          Recipes
        </text>
      </svg>
      <MainDish />
      <div className="flex flex-wrap p-4 md:justify-center xl:justify-start gap-2 mt-2">
        {recipes.map((item, i) => (
          <NormalDish item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
