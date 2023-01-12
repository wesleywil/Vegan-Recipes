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
  const special = useSelector((state: RootState) => state.dish.special_recipe);
  const status = useSelector((state: RootState) => state.dish.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [status, recipes]);

  return (
    <div className=" h-full min-h-screen	 w-screen flex flex-col ">
      {in_view ? (
        <DishDetails
          name="vegan barbecue"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic mollitia nam asperiores vitae cum blanditiis possimus ipsum necessitatibus iste dignissimos, sunt vero, animi pariatur quis veritatis? Tempore, quod laudantium!"
          ingredients={["No Meat", "No Meat"]}
          category="entryee"
          preparation_time={45}
        />
      ) : (
        ""
      )}
      <svg viewBox="0 0 450 150">
        <text className="svgText" x="50" y="90">
          Recipes
        </text>
      </svg>
      {/* <h1 className="text-8xl text-center font-bold my-8 underline text-[#358546]/90">
        Recipes
      </h1> */}
      <MainDish
        name={special!.name}
        description={special!.description}
        category={special!.category}
        preparation_time={special!.preparation_time}
      />
      <div className="flex flex-wrap p-4 md:justify-center xl:justify-start gap-2 mt-2">
        {recipes.map((item) => (
          <NormalDish
            key={item.id}
            name={item.name}
            description={item.description}
            category={item.category}
            preparation_time={item.preparation_time}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
