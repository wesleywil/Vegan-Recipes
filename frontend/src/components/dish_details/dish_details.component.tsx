import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { switch_view } from "../../redux/dish/dish";
import { fetchIngredientsByIds } from "../../redux/ingredients/ingredients";

const DishDetails = () => {
  const item = useSelector((state: RootState) => state.dish.recipe);
  const view = useSelector((state: RootState) => state.dish.in_view);
  const status = useSelector((state: RootState) => state.ingredients.status);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Dish Details Useeffect");
    // if (status === "idle") {
    dispatch(fetchIngredientsByIds(item.ingredients));

    // }
    //console.log("INGREDIENTS => ", ingredients);
  }, [view]);

  return (
    <div className="centered z-10  md:w-96 pattern2 border border-black rounded-xl">
      <div className="bg-[#358546]/80 text-white font-bold flex justify-between rounded-t-xl p-1">
        <span className="self-center text-sm px-2 ">Dish Details</span>
        <button
          onClick={() => dispatch(switch_view())}
          className="mx-2 self-center bg-white text-[#358546] hover:text-red-600 text-xl px-2 rounded-full transition durarion-700 ease-in-out"
        >
          X
        </button>
      </div>
      <div className="text-[#135e23] text-center p-2 my-2">
        <h1 className="text-2xl font-bold">
          {item.name} - {item.preparation_time}m
        </h1>
        <img
          src="https://images.unsplash.com/photo-1570145820386-15a56730192c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="dish"
          className="w-96 mt-2 mx-auto rounded-xl shadow-lg border border-[#358546] "
        />

        <p className="text-sm p-2">{item.description}</p>
        <h2 className="text-xl font-semibold">Ingredients</h2>
        {ingredients.length
          ? ingredients.map((item, i) => <li key={i}>{item.name}</li>)
          : ""}
        {/* {item.ingredients?.length
          ? item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)
          : ""} */}
      </div>
    </div>
  );
};

export default DishDetails;
