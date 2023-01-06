import MainDish from "../../../components/main_dish/main_dish.component";
import NormalDish from "../../../components/normal_dish/normal_dish.component";

const Recipes = () => {
  return (
    <div className=" h-full w-screen flex flex-col bg-[#e0d1b8]">
      <h1 className="text-8xl text-center font-bold my-4 underline text-[#358546]">
        Recipes
      </h1>
      <MainDish
        name="special dish"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus. "
        category="Main Dish"
        preparation_time={30}
      />
      <div className="flex flex-wrap p-4 justify-start gap-2 mt-2">
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
