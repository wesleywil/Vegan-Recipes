import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import MainDish from "../../components/main_dish/main_dish.component";
import NormalDish from "../../components/normal_dish/normal_dish.component";
import DishDetails from "../../components/dish_details/dish_details.component";
import { useEffect } from "react";

const Recipes = () => {
  const in_view = useSelector((state: RootState) => state.dish.in_view);

  useEffect(() => {}, []);
  return (
    <div className=" h-full w-screen flex flex-col ">
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

      <h1 className="text-8xl text-center font-bold my-8 underline text-[#358546]/90">
        Recipes
      </h1>
      <MainDish
        name="special dish"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus. "
        category="Main Dish"
        preparation_time={30}
      />
      <div className="flex flex-wrap p-4 md:justify-center xl:justify-start gap-2 mt-2">
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
        <NormalDish
          name="special dish"
          description=" "
          category="Main Dish"
          preparation_time={30}
        />
      </div>
    </div>
  );
};

export default Recipes;
