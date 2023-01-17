import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { switch_delete_view } from "../../../redux/admin/admin";
import { cleanRecipeSelection, deleteRecipe } from "../../../redux/dish/dish";

const DeleteConfirmation = () => {
  const recipe_id = useSelector((state: RootState) => state.dish.recipe._id);
  const dispatch = useDispatch<AppDispatch>();

  const cleanSelecion = () => {
    dispatch(switch_delete_view());
    dispatch(cleanRecipeSelection());
  };

  const handleDelete = () => {
    dispatch(switch_delete_view());
    dispatch(deleteRecipe(recipe_id));
  };
  return (
    <div className="w-1/2 mx-auto flex gap-2 justify-center font-bold text-center text-[#358546] text-xl mb-2">
      <h1>Are you sure you want to delete this recipe?</h1>
      <div className="flex gap-1">
        <button
          onClick={() => handleDelete()}
          className="text-red-600 hover:text-red-800  transform duration-700 ease-in-out"
        >
          Yes
        </button>
        /
        <button
          onClick={() => cleanSelecion()}
          className="text-blue-600 hover:text-blue-800 transform duration-700 ease-in-out"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
