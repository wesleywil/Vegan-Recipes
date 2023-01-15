import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { fetchRecipes } from "../../../redux/dish/dish";
import {
  switch_delete_view,
  switch_form_view,
} from "../../../redux/admin/admin";

import RecipeItem from "../../components/recipe_item/recipe_item.component";
import SearchBar from "../../components/search_bar/search_bar.component";
import DeleteConfirmation from "../../components/delete_confirmation/delete_confirmation.component";
import Form from "../../components/form/form.component";

const Main = () => {
  const status = useSelector((state: RootState) => state.dish.status);
  const recipes = useSelector((state: RootState) => state.dish.recipes);
  const hidden_form = useSelector(
    (state: RootState) => state.admin.form_hidden
  );
  const hidden_delete = useSelector(
    (state: RootState) => state.admin.delete_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, recipes, hidden_delete, hidden_form]);
  return (
    <div className="h-full min-h-screen	w-full min-w-screen">
      <svg viewBox="0 0 450 150">
        <text className="svgText" x="50" y="90">
          Admin
        </text>
      </svg>
      {hidden_form ? "" : <Form />}

      <div className="w-1/2  mx-auto flex gap-2 my-2 px-4 font-bold text-white text-xl">
        <button
          onClick={() => dispatch(switch_form_view())}
          className="flex-none bg-[#358546] hover:bg-[#20522b]/70 px-2 py-0 rounded-full transform duration-700 ease-in-out"
        >
          New recipe
        </button>
        <SearchBar />
      </div>
      {hidden_delete ? "" : <DeleteConfirmation />}

      <div className="w-1/2 mx-auto flex flex-col items-center border border-[#358546] rounded-xl">
        {recipes.map((item, i) => (
          <RecipeItem
            key={i}
            id={item.id}
            name={item.name}
            category={item.category}
            preparation_time={item.preparation_time}
            special={item.special}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
