import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import {
  switch_form_view,
  switch_delete_view,
  switch_ingredients_view,
} from "../../../redux/admin/admin";
import { selectById } from "../../../redux/dish/dish";
import { FaList, FaEdit, FaTrashAlt } from "react-icons/fa";

type RecipeItemInfo = {
  id: string;
  name: string;
  category: string;
  preparation_time: number;
  special: boolean;
};

const RecipeItem = ({ ...item }: RecipeItemInfo) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    dispatch(switch_form_view());
    dispatch(selectById(item.id));
  };

  const handleDelete = () => {
    dispatch(switch_delete_view());
    dispatch(selectById(item.id));
  };

  const handleIngredients = () => {
    dispatch(switch_ingredients_view());
    dispatch(selectById(item.id));
  };

  return (
    <div className="w-full flex p-1">
      <div className="w-full self-center px-2 flex justify-between  text-white bg-[#358546d8]/60 z-10 rounded-xl">
        <div className="flex flex-col gap-0 py-2">
          <h1 className="text-2xl font-semibold">
            {item.name} {item.special ? "- Special" : ""}
          </h1>

          <h3>
            {item.category} - {item.preparation_time}m
          </h3>
        </div>
        <div className="flex self-center gap-2 p-2">
          <button
            onClick={() => handleIngredients()}
            className="flex-none h-8 px-2 bg-blue-500/60 hover:bg-blue-300 text-white hover:text-gray-600 font-bold  rounded-xl transform duration-700 ease-in-out"
          >
            <FaList />
          </button>
          <button
            onClick={() => handleEdit()}
            className="flex-none h-8 px-2 bg-yellow-500/60 hover:bg-yellow-300 text-white hover:text-gray-600 font-bold  rounded-xl transform duration-700 ease-in-out"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete()}
            className="flex-none h-8 px-2  bg-red-500/60 hover:bg-red-300 text-white hover:text-gray-600 font-bold  rounded-xl transform duration-700 ease-in-out"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
